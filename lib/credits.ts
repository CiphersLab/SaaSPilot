'use server'
import { db } from '@/db'

// Create or initialize credits for a user
export async function createCredits(userId: string, initialCredits = 0) {
  return await db.credit.create({
    data: {
      userId,
      balance: initialCredits,
    },
  });
}

// Get user credits
export async function getCredits(userId: string) {
  return await db.credit.findUnique({
    where: { userId },
  });
}

// Increment user credits
export async function incrementCredits(userId: string, amount: number) {
  return await db.credit.update({
    where: { userId },
    data: { balance: { increment: amount } },
  });
}

// Decrement user credits
export async function decrementCredits(userId: string, amount: number) {
  const credit = await getCredits(userId);

  if (!credit || credit.balance < amount) {
    throw new Error('Insufficient credits');
  }

  return await db.credit.update({
    where: { userId },
    data: { balance: { decrement: amount } },
  });
}
