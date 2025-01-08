"use client"
import Dashboard from '@/components/Dashboard'
import { db } from '@/db'
// import { getUserSubscriptionPlan } from '@/lib/stripe'
import { redirect } from 'next/navigation'
import { useCurrentUser } from "@/hooks/use-current-user";
import { User } from '@prisma/client';

import { useState } from 'react';


const Page =  () => {
  const user = useCurrentUser();  
  if (!user || !user.id) redirect('/auth-callback?origin=dashboard')  
      
  return <Dashboard user={user}  />
  
}

export default Page
