'use client'


import { useToast } from './ui/use-toast'
import { createStripeSession } from '@/actions/createStripeSession'; // Import your server action
import MaxWidthWrapper from './MaxWidthWrapper'
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card'
import { Button } from './ui/button'
import { Loader2 } from 'lucide-react'
import { format } from 'date-fns'
import { useState } from 'react';
import { useCurrentUser } from "@/hooks/use-current-user";
import { useRouter } from 'next/navigation';
import { useCredits } from '@/app/(protected)/dashboard/(context)/CreditsContext';



const BillingForm = () => {  
  const router = useRouter();
    const handleCreateStripeSession = async () => {      
      router.push("/dashboard/billing/add-credits");
    };
  
  const { credits } = useCredits();  // Get credits and totalUsage from the context

  return (
    <div className='pl-12 pr-12'>
      <form        
        onSubmit={(e) => {
          e.preventDefault()
          handleCreateStripeSession()
        }}>
        <Card>
          <CardHeader>
            <CardTitle>User Credits</CardTitle>
            <CardDescription>
              You are currently have{' '}
              <strong>{credits}</strong> credits left.
            </CardDescription>
          </CardHeader>

          <CardFooter className='flex flex-col items-start space-y-2 md:flex-row md:justify-between md:space-x-0'>
            <Button type='submit'>              
              Add More Credits              
            </Button>
            
          </CardFooter>
        </Card>
      </form>
    </div>
  )
}

export default BillingForm
