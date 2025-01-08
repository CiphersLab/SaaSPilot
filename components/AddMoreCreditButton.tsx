"use client"

import { ArrowRight } from 'lucide-react'
import { Button } from './ui/button'
import { createStripeSession } from '@/actions/createStripeSession'; // Import your server action
import { useState } from 'react';

interface AddMoreCreditButtonProps {  
  userId: string;
  planId:any
}

const AddMoreCreditButton = ({
  userId,
  planId
}: AddMoreCreditButtonProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleUpgrade = async () => {
    setIsLoading(true);
    try {      
      const response = await createStripeSession(userId,planId);

      if (response?.url) {
        window.location.href = response.url;
      } else {
        window.location.href = '/dashboard/billing/add-credits';
      }
    } catch (error) {
      console.error('Error creating Stripe session:', error);
      window.location.href = '/dashboard/billing'; // Fallback in case of an error
    } finally {
      setIsLoading(false);
    }
  };

  

  return (
    <Button onClick={() => handleUpgrade()} className='w-full'>
      Add Credits <ArrowRight className='h-5 w-5 ml-1.5' />
    </Button>
  )
}

export default AddMoreCreditButton
