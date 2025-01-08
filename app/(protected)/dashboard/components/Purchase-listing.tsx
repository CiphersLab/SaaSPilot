import { DataTable as PurchaseTable } from "./table/data-table";
import { columns } from "./table/purchase-columns";
import { getPurchases } from "@/lib/purchases";
import { currentUser } from "@/lib/auth";
import { User, Purchase } from '@prisma/client';
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

type PurchaseListingPage = {};

export default async function PurchaseListingPage({}: PurchaseListingPage) {
  const page = 1;  
  const pageLimit = 10;
  const user = await currentUser() as User | undefined;  

  const filters = {
    page,
    limit: pageLimit,
    userId: user?.id    
  };

  const data = await getPurchases(filters);

  return <>
    <Card>
          <CardHeader>
            <CardTitle>Purchase History</CardTitle>
            <CardDescription className="pt-6">
              <PurchaseTable columns={columns} data={data.purchases} totalItems={data.totalItems} />
            </CardDescription>
          </CardHeader>
          
    </Card>      
  </> 
  
}
