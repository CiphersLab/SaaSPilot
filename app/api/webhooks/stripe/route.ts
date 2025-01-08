import { Credits_PLANS } from '@/config/stripe'
import { db } from '@/db'
import { stripe } from '@/lib/stripe'
import { headers } from 'next/headers'
import type Stripe from 'stripe'

export async function POST(request: Request) {
  
  const body = await request.text()  
  const signature = headers().get('Stripe-Signature') ?? ''  
  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET || ''
    )    
  } catch (err) {
    console.log('----error-----')  
    return new Response(
      `Webhook Error: ${
        err instanceof Error ? err.message : 'Unknown Error'
      }`,
      { status: 400 }
    )
  }

  const session = event.data
    .object as Stripe.Checkout.Session    
  if (!session?.metadata?.userId) {
    return new Response(null, {
      status: 200,
    })
  }

  if (event.type === 'checkout.session.completed') {
        
    if(session?.customer){
      await db.user.update({
        where: {
          id: session.metadata.userId,
        },
        data: {          
          stripeCustomerId: session.customer as string,          
        },
      })

    }

    let currentPlan = Credits_PLANS.find(
      (plan) => plan.id == parseInt(session?.metadata?.priceId ?? '')
    )
    
    await db.purchase.create({
      data: {
        userId: session.metadata.userId,
        stripeId: session.id,        
        stripePriceId: session?.metadata?.priceId,
        packageName: currentPlan?.name ?? '',        
        amount: session ? (session?.amount_total ?? 0 / 100) : 0,
        creditsAdded: currentPlan?.quota ?? 0,
      },
    });

    await db.credit.upsert({
      where: { userId: session.metadata.userId },
      update: { balance: { increment: currentPlan?.quota ?? 0, } },
      create: {
        userId: session.metadata.userId,
        balance: currentPlan?.quota ?? 0,
      },
    });
  }

  // if (event.type === 'invoice.payment_succeeded') {
  //   // Retrieve the subscription details from Stripe.
  //   const subscription =
  //     await stripe.subscriptions.retrieve(
  //       session.subscription as string
  //     )

  //   await db.user.update({
  //     // @ts-ignore
  //     where: {
  //       stripeSubscriptionId: subscription.id,
  //     },
  //     data: {
  //       stripePriceId: subscription.items.data[0]?.price.id,
  //       stripeCurrentPeriodEnd: new Date(
  //         subscription.current_period_end * 1000
  //       ),
  //     },
  //   })
  // }

  return new Response(null, { status: 200 })
}
