"use client";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../collapsible";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../dropdown-menu";
import { Separator } from "../separator";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
} from "../sidebar";
import {
  BadgeCheck,
  Bell,
  ChevronRight,
  ChevronsUpDown,
  CreditCard,
  GalleryVerticalEnd,
  LogOut,
} from "lucide-react";
// import { useSession } from 'next-auth/react';
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import * as React from "react";
import { logout } from "@/actions/logout";
import { useCurrentUser } from "@/hooks/use-current-user";
import { navItems } from "../../constants/navItems";
import { Icons } from "../icons";
import { User } from "@prisma/client";
import clsx from "clsx";
import CreditsDisplay from "../CreditsDisplay";
import { CreditsProvider } from "../../(context)/CreditsContext";
import { ThemeToggle } from "@/components/theme-toggle";

export const company = {
  name: "SaaS Pilot",
  logo: GalleryVerticalEnd,
  plan: "User",
};

export default function DashboardSidebar({
  children,
  user,
  isRTL,
}: {
  children: React.ReactNode;
  user: User | undefined;
  isRTL: boolean;
}) {
  const [mounted, setMounted] = React.useState(false);
  const pathname = usePathname();
  const router = useRouter();
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // or a loading skeleton
  }

  const onClick = () => {
    logout();
  };

  const goToBilling = () => {
    router.push("/dashboard/billing");
  };

  const goToSettings = () => {
    router.push("/dashboard/settings");
  };

  return (
    <SidebarProvider>
      <CreditsProvider userId={user?.id ?? ""}> {/* Replace 'user-id' with dynamic ID */}
        <Sidebar collapsible="icon" side={isRTL ? "right" : "left"}>
          <SidebarHeader>
            <div className="flex gap-2 py-2 text-sidebar-accent-foreground ">
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                <company.logo className="size-4" />
              </div>
              <div
                className={clsx("grid flex-1 text-sm leading-tight", {
                  "text-left": !isRTL,
                  "text-right": isRTL,
                })}
              >
                <span className="truncate font-semibold">{company.name}</span>
                <span className="truncate text-xs">{company.plan}</span>
              </div>
            </div>
          </SidebarHeader>
          <SidebarContent className="overflow-x-hidden">
            <SidebarGroup>
              <SidebarGroupLabel>Overview</SidebarGroupLabel>
              <SidebarMenu>
                {navItems.map((item) => {
                  const Icon = item.icon ? Icons[item.icon] : Icons.logo;
                  return item?.items && item?.items?.length > 0 ? (
                    <Collapsible
                      key={item.title}
                      asChild
                      defaultOpen={item.isActive}
                      className="group/collapsible"
                    >
                      <SidebarMenuItem>
                        <CollapsibleTrigger asChild>
                          <SidebarMenuButton
                            tooltip={item.title}
                            isActive={pathname === item.url}
                          >
                            {item.icon && <Icon />}
                            <span>{item.title}</span>
                            <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                          </SidebarMenuButton>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <SidebarMenuSub>
                            {item.items?.map((subItem) => (
                              <SidebarMenuSubItem key={subItem.title}>
                                <SidebarMenuSubButton
                                  asChild
                                  isActive={pathname === subItem.url}
                                >
                                  <Link href={subItem.url}>
                                    <span>{subItem.title}</span>
                                  </Link>
                                </SidebarMenuSubButton>
                              </SidebarMenuSubItem>
                            ))}
                          </SidebarMenuSub>
                        </CollapsibleContent>
                      </SidebarMenuItem>
                    </Collapsible>
                  ) : (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton
                        asChild
                        tooltip={item.title}
                        isActive={pathname === item.url}
                      >
                        <Link href={item.url}>
                          <Icon />
                          <span>{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroup>
          </SidebarContent>
          <SidebarFooter>
            <CreditsDisplay/>
            <SidebarMenu>
              <SidebarMenuItem>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <SidebarMenuButton
                      size="lg"
                      className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                    >
                      <Avatar className="h-8 w-8 rounded-lg">
                        <AvatarImage
                          src={user?.image || ""}
                          alt={user?.name || ""}
                        />
                        <AvatarFallback className="rounded-lg">
                          {user?.name?.slice(0, 2)?.toUpperCase() || "CN"}
                        </AvatarFallback>
                      </Avatar>
                      <div className={clsx("grid flex-1 text-sm leading-tight", { "text-left": !isRTL, "text-right": isRTL })}>
                        <span className="truncate font-semibold">
                          {user?.name || ""}
                        </span>
                        <span className="truncate text-xs">
                          {user?.email || ""}
                        </span>
                      </div>
                      <ChevronsUpDown className="ml-auto size-4" />
                    </SidebarMenuButton>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg bg-white"
                    side="bottom"
                    align="end"
                    sideOffset={4}
                  >
                    <DropdownMenuLabel className="p-0 font-normal">
                      <div
                        className={clsx(
                          "flex items-center gap-2 px-1 py-1.5 text-sm",
                          { "text-left": !isRTL, "text-right": isRTL }
                        )}
                      >
                        <Avatar className="h-8 w-8 rounded-lg">
                          <AvatarImage
                            src={user?.image || ""}
                            alt={user?.name || ""}
                          />
                          <AvatarFallback className="rounded-lg">
                            {user?.name?.slice(0, 2)?.toUpperCase() || "CN"}
                          </AvatarFallback>
                        </Avatar>
                        <div className={clsx("grid flex-1 text-sm leading-tight", { "text-left": !isRTL, "text-right": isRTL })}>
                          <span className="truncate font-semibold">
                            {user?.name || ""}
                          </span>
                          <span className="truncate text-xs">
                            {" "}
                            {user?.email || ""}
                          </span>
                        </div>
                      </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />

                    <DropdownMenuGroup>
                      <DropdownMenuItem onClick={goToSettings}>
                        <BadgeCheck className="mr-2" />
                        Account
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={goToBilling}>
                        <CreditCard className="mr-2" />
                        Billing
                      </DropdownMenuItem>
                      {/* <DropdownMenuItem>
                        <Bell />
                        Notifications
                      </DropdownMenuItem> */}
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className={clsx({ "justify-end": isRTL })} onClick={onClick}>
                      <LogOut className={clsx("mx-2", { "rotate-180" :isRTL})}/>
                      Log out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarFooter>
          <SidebarRail />
        </Sidebar>
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center justify-between gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
            <div className="flex items-center gap-2 px-4">
              <SidebarTrigger className="-ml-1" />
              <Separator orientation="vertical" className="mr-2 h-4" />
            </div>
            <div className="flex items-center gap-2 px-4">
              <ThemeToggle />
            </div>
          </header>
          {/* page main content */}
          
          {children}                
        </SidebarInset>
      </CreditsProvider>
    </SidebarProvider>
  );
}
