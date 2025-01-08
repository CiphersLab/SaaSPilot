"use client";

// import { getUserSubscriptionPlan } from "@/lib/stripe";
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

interface PageProps {
  user: any;
  // subscriptionPlan: Awaited<ReturnType<typeof getUserSubscriptionPlan>>;
}

const Dashboard = ({ user }: PageProps) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

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
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                  <p>
                    Iste quidem dolorem labore placeat nam accusamus pariatur
                    ducimus. Consequatur consequuntur dolorem blanditiis,
                    incidunt ullam eius nihil rem! Suscipit illum consequuntur
                    inventore.
                  </p>
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