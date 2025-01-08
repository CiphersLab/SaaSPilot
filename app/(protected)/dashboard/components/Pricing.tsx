'use client'
import React from 'react';


import { buttonVariants } from '@/components/ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { Credits_PLANS } from '@/config/stripe'
import { cn } from '@/lib/utils'
import {
  ArrowRight,
  Check,
  HelpCircle,
  Minus,
} from 'lucide-react'
import Link from 'next/link'
import { useCurrentUser } from "@/hooks/use-current-user";
import AddMoreCreditButton from '@/components/AddMoreCreditButton';


const Pricing: React.FC = () => {
  const user = useCurrentUser();  
  const pricingItems = [
    {
      plan: 'Free',
      tagline: 'For starters.',
      quota: 10,
      features: [
        {
          text: '5 pages per PDF',
          footnote:
            'The maximum amount of pages per PDF-file.',
        },
        {
          text: '4MB file size limit',
          footnote:
            'The maximum file size of a single PDF file.',
        },
        {
          text: 'Mobile-friendly interface',
        },
        {
          text: 'Higher-quality responses',
          footnote:
            'Better algorithmic responses for enhanced content quality',
          negative: true,
        },
        {
          text: 'Priority support',
          negative: true,
        },
      ],
    },
    {
      plan: 'Starter',
      tagline: 'For larger projects with higher needs.',
      quota: Credits_PLANS.find((p) => p.slug === 'starter')!.quota,
      features: [
        {
          text: '25 pages per PDF',
          footnote:
            'The maximum amount of pages per PDF-file.',
        },
        {
          text: '16MB file size limit',
          footnote:
            'The maximum file size of a single PDF file.',
        },
        {
          text: 'Mobile-friendly interface',
        },
        {
          text: 'Higher-quality responses',
          footnote:
            'Better algorithmic responses for enhanced content quality',
        },
        {
          text: 'Priority support',
        },
      ],
    },
    {
      plan: 'Pro',
      tagline: 'For larger projects with higher needs.',
      quota: Credits_PLANS.find((p) => p.slug === 'pro')!.quota,
      features: [
        {
          text: '25 pages per PDF',
          footnote:
            'The maximum amount of pages per PDF-file.',
        },
        {
          text: '16MB file size limit',
          footnote:
            'The maximum file size of a single PDF file.',
        },
        {
          text: 'Mobile-friendly interface',
        },
        {
          text: 'Higher-quality responses',
          footnote:
            'Better algorithmic responses for enhanced content quality',
        },
        {
          text: 'Priority support',
        },
      ],
    },
  ]

  return (
    <>             
      <div className='mt-6 pl-12 mb-10 sm:max-w-lg'>
        <h1 className='text-3xl font-bold sm:text-4xl'>
          Pricing
        </h1>
        <p className='mt-5 text-gray-600 sm:text-lg'>
          Whether you&apos;re just trying out our service
          or need more, we&apos;ve got you covered.
        </p>
      </div>       
      <div className='pb-12 pt-12 grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3 pr-12	pl-12'>
        <TooltipProvider>
          {pricingItems.map(
            ({ plan, tagline, quota, features }) => {
              const price =
                Credits_PLANS.find(
                  (p) => p.slug === plan.toLowerCase()
                )?.price.amount || 0

              const planId =
                Credits_PLANS.find(
                  (p) => p.slug === plan.toLowerCase()
                )?.id

              return (
                <div
                  key={plan}
                  className={cn(
                    'relative rounded-2xl bg-white shadow-lg border border-gray-200',                    
                  )}>
                  {/* {plan === 'Pro' && (
                    <div className='absolute -top-5 left-0 right-0 mx-auto w-32 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 px-3 py-2 text-sm font-medium text-white'>
                      Upgrade now
                    </div>
                  )} */}

                  <div className='p-5'>
                    <h3 className='my-3 text-center font-display text-3xl font-bold'>
                      {plan}
                    </h3>
                    <p className='text-gray-500'>
                      {tagline}
                    </p>
                    <p className='my-5 font-display text-6xl font-semibold'>
                      ${price}
                    </p>
                    <p className='text-gray-500'>
                      per month
                    </p>
                  </div>

                  <div className='flex h-20 items-center justify-center border-b border-t border-gray-200 bg-gray-50'>
                    <div className='flex items-center space-x-1'>
                      <p>
                        {quota.toLocaleString()} Credits/mo
                        included
                      </p>

                      <Tooltip delayDuration={300}>
                        <TooltipTrigger className='cursor-default ml-1.5'>
                          <HelpCircle className='h-4 w-4 text-zinc-500' />
                        </TooltipTrigger>
                        <TooltipContent className='w-80 p-2'>
                          Credits are used to gererate AI content
                        </TooltipContent>
                      </Tooltip>
                    </div>
                  </div>

                  {/* <ul className='my-10 space-y-5 px-8'>
                    {features.map(
                      ({ text, footnote, negative }) => (
                        <li
                          key={text}
                          className='flex space-x-5'>
                          <div className='flex-shrink-0'>
                            {negative ? (
                              <Minus className='h-6 w-6 text-gray-300' />
                            ) : (
                              <Check className='h-6 w-6 text-blue-500' />
                            )}
                          </div>
                          {footnote ? (
                            <div className='flex items-center space-x-1'>
                              <p
                                className={cn(
                                  'text-gray-600',
                                  {
                                    'text-gray-400':
                                      negative,
                                  }
                                )}>
                                {text}
                              </p>
                              <Tooltip
                                delayDuration={300}>
                                <TooltipTrigger className='cursor-default ml-1.5'>
                                  <HelpCircle className='h-4 w-4 text-zinc-500' />
                                </TooltipTrigger>
                                <TooltipContent className='w-80 p-2'>
                                  {footnote}
                                </TooltipContent>
                              </Tooltip>
                            </div>
                          ) : (
                            <p
                              className={cn(
                                'text-gray-600',
                                {
                                  'text-gray-400':
                                    negative,
                                }
                              )}>
                              {text}
                            </p>
                          )}
                        </li>
                      )
                    )}
                  </ul> */}
                  <div className='border-t border-gray-200' />
                  <div className='p-5'>                    
                    <AddMoreCreditButton userId={user?.id ?? ''} planId={planId ?? 0} />                    
                  </div>
                </div>
              )
            }
          )}
        </TooltipProvider>
      </div>      
    </>
  )
};


export default Pricing;
