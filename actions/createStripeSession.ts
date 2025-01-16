'use server'
import { db } from "@/db";
import { absoluteUrl } from '@/lib/utils'
import {    
    stripe,
} from '@/lib/stripe'
import { Credits_PLANS } from '@/config/stripe'



export const createStripeSession :any = async (userId: string | undefined, planId: string) => {   
    const billingUrl = absoluteUrl('/dashboard/billing/add-credits')

    if (!userId)
      return { error: "Unauthorized" };

    const dbUser = await db.user.findFirst({
      where: {
        id: userId,
      },
    })

    if (!dbUser)
      return { error: "Unauthorized" };    

    const packageC = Credits_PLANS.find(
      (plan) => plan.id == parseInt(planId)
    )
           
    if (dbUser.stripeCustomerId ) {
     
      const stripeSession =
      await stripe.checkout.sessions.create({
        customer: dbUser.stripeCustomerId,
        success_url: billingUrl,
        cancel_url: billingUrl,
        payment_method_types: ['card'],//'paypal'
        mode: 'payment',
        billing_address_collection: 'auto',
        line_items: [
          {
            price: packageC?.price.priceIds.test,
            quantity: 1,
          },
        ],
        metadata: {
          userId: userId,
          priceId: planId,
        },
      })

      return { url: stripeSession.url }    
    }else{
      
      const stripeSession =
      await stripe.checkout.sessions.create({        
        success_url: billingUrl,
        cancel_url: billingUrl,
        payment_method_types: ['card'],//'paypal'
        mode: 'payment',
        billing_address_collection: 'auto',
        line_items: [
          {
            price: packageC?.price.priceIds.test,
            quantity: 1,
          },
        ],
        metadata: {
          userId: userId,          
          priceId: planId,          
        },
      })

    return { url: stripeSession.url }    
    }
    
};