"use client";

// import { getUserSubscriptionPlan } from "@/lib/stripe";
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "./ui/button";
import { useCredits } from "@/app/(protected)/dashboard/(context)/CreditsContext";



interface PageProps {
  user: any;
  // subscriptionPlan: Awaited<ReturnType<typeof getUserSubscriptionPlan>>;
}

const Dashboard = ({ user }: PageProps) => {
  const [loading, setLoading] = useState(true);
  const { spendCredits } = useCredits();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  const subtractCredits = async () => {    
    await spendCredits(user.id, 10); // Replace 'user-id' with actual ID
  };

  return (
    <main className="max-w-7xl md:p-10">
      <Card className="mx-auto w-full">
        <CardHeader>
          {loading ? (
            <Skeleton className="h-8 w-48" />
          ) : (
            <h1 className="text-3xl">Hello, {user.name}!</h1>
          )}
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            <div className="space-y-6">
              {loading ? (
                <>
                  <Skeleton className="h-4 w-16" />
                  <Skeleton className="h-32 w-full rounded-lg" />{" "}
                </>
              ) : (
                <>
                  <p>Start using our product feature here</p>

                  <p>
                  The button below, illustrate how credits are deducted from user profile. This will deducts 10 credits from user profile.
                  </p>
                  <Button onClick={() => subtractCredits()} className='w-[250px] mt-3'>
                    User Credits
                  </Button>
                </>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </main>
  );
};

export default Dashboard;