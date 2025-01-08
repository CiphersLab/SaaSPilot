'use server'
import { db } from '@/db'



// Get all purchases for a user
export async function getPurchasesByUserId(userId: string) {
  return await db.purchase.findMany({
    where: { userId },
    orderBy: { createdAt: 'desc' },
  });
}

// Get a single purchase
export async function getPurchaseByStripeId(stripeId: string) {
  return await db.purchase.findUnique({
    where: { stripeId },
  });
}


export const getPurchases = async ({
  page = 1,
  limit = 10, 
  userId 
}: {
  page?: number;
  limit?: number;
  userId?: string;  
}) => {

  const response = await db.purchase.findMany({
    where: { userId },
    take: limit, skip: (page - 1) > 0 ? limit * (page - 1) : 0,
    orderBy: { createdAt: 'desc' },
  });

  
  const total = (await db.purchase.findMany()).length;

  return { success: "Get Purchases was successfully!", purchases: response, totalItems: total };
}