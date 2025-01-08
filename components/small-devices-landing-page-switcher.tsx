import { Fragment } from "react";

import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { renderFlag } from "./render-flag";

import { locales } from "@/i18n/config";
import { useLocale } from "next-intl";
import Link from "next/link";
import {
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuPortal,
  DropdownMenuSubContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

export function SmallDevicesLandingPageSwitcher() {

  return (
    <DropdownMenuSub>
      <DropdownMenuSubTrigger>
        <span>Landing Page</span>
      </DropdownMenuSubTrigger>
      <DropdownMenuPortal>
        <DropdownMenuSubContent>
          <Link href="/landing-page-1">
            <DropdownMenuItem
              className="flex cursor-pointer items-start justify-center"
            >
              Landing Page 1
            </DropdownMenuItem>
          </Link>

          <Link href="/">
            <DropdownMenuItem
              className="flex cursor-pointer items-start justify-center"
            >
              Landing Page 2
            </DropdownMenuItem>
          </Link>
        </DropdownMenuSubContent>
      </DropdownMenuPortal>
    </DropdownMenuSub>
  );
}
