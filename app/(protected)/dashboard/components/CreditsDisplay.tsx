'use client'
import React from 'react';
import { useCredits } from '../(context)/CreditsContext';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';


const CreditsDisplay: React.FC = () => {
  const { credits } = useCredits();  // Get credits and totalUsage from the context
  const router = useRouter();
  const handleAddMore = async () => {    
    router.push("/dashboard/billing/add-credits");
  };

  return (
    <div className='bg-background' style={styles.container}>
      <h2>User Credits</h2>
      <div style={styles.balanceContainer}>
        <p><strong>Current Balance:</strong> {credits} 🪙</p>        
      </div>
      <div>
      <Button onClick={() => handleAddMore()} className='w-full mt-3'>
        Add More Credits <ArrowRight className='h-5 w-5 ml-1.5' />
      </Button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',    
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '400px',
    margin: '20px auto',
  },
  balanceContainer: {
    marginTop: '10px',
  },
};

export default CreditsDisplay;
