import { currentUser } from "@/lib/auth";
import DashboardSidebar from "./components/layout/dashboard-sidebar";
import { User } from "@prisma/client";
import { getLocale } from "next-intl/server";
import "@/app/globals.css";
let rtlDetector = require("rtl-detect");
interface ProtectedLayoutProps {
  children: React.ReactNode;
}

const ProtectedLayout = async ({ children }: ProtectedLayoutProps) => {
  const user = await currentUser() as User | undefined;
  const currentLocale = await getLocale();
  const isRTL = rtlDetector.isRtlLang(currentLocale);

  return (
    <div>
      <DashboardSidebar isRTL={isRTL} user={user}>{children}</DashboardSidebar>
    </div>
  );
};

export default ProtectedLayout;
