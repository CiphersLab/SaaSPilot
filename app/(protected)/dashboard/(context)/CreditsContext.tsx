import { decrementCredits, getCredits, incrementCredits } from '@/lib/credits';
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';



// Define types for the credits context state
interface CreditsContextType {
  credits: number;  
  addCredits: (userId: string, amount: number) => Promise<void>;
  spendCredits: (userId: string, amount: number) => Promise<void>;
  refreshCredits: (userId: string) => Promise<void>; // Sync with the database
}

// Create the Credits Context with default values (type safety)
const CreditsContext = createContext<CreditsContextType | undefined>(undefined);

// Custom hook to use Credits Context
export const useCredits = (): CreditsContextType => {
  const context = useContext(CreditsContext);
  if (!context) {
    throw new Error('useCredits must be used within a CreditsProvider');
  }
  return context;
};

// Credits Context Provider
interface CreditsProviderProps {
  children: ReactNode;
  userId: string; // Pass user ID from props
}

export const CreditsProvider: React.FC<CreditsProviderProps> = ({ children, userId }) => {
  const [credits, setCredits] = useState<number>(0); // User's current balance  

  // Fetch user credits from the database
  const refreshCredits = async (userId: string): Promise<void> => {
    try {      
      const creditData = await getCredits(userId);      
      setCredits(creditData?.balance || 0);
    } catch (error) {
      console.error('Error fetching credits:', error);
    }
  };

  // Add credits and sync with the database
  const addCredits = async (userId: string, amount: number): Promise<void> => {
    try {
      await incrementCredits(userId, amount); // Update credits in the backend
      setCredits((prevCredits) => prevCredits + amount); // Update local state
    } catch (error) {
      console.error('Error adding credits:', error);
    }
  };

  // Spend credits and sync with the database
  const spendCredits = async (userId: string, amount: number): Promise<void> => {
    try {
      if (credits < amount) {
        throw new Error('Insufficient credits');
      }
      await decrementCredits(userId, amount); // Update credits in the backend
      setCredits((prevCredits) => prevCredits - amount); // Update local state      
    } catch (error) {
      console.error('Error spending credits:', error);
    }
  };

  // Fetch initial credits when the component mounts
  useEffect(() => {
    if (userId) {
      refreshCredits(userId);
    }
  }, [userId]);

  return (
    <CreditsContext.Provider value={{ credits, addCredits, spendCredits, refreshCredits }}>
      {children}
    </CreditsContext.Provider>
  );
};
