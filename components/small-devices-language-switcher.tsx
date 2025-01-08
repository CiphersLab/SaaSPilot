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

export function SmallDevicesLanguageSwitcher() {
  const locale = useLocale();

  const filteredLocales = locales?.filter(
    (currentLocale) => currentLocale !== locale
  );

  return (
    <DropdownMenuSub>
      <DropdownMenuSubTrigger>
        <span>Languages</span>
      </DropdownMenuSubTrigger>
      <DropdownMenuPortal>
        <DropdownMenuSubContent>
          {filteredLocales?.map((currentLocale, index) => (
            <Fragment key={index}>
              <Link
                href="/"
                // TODO error on sub layout language switch (example from dashboard)
                // href={pathname?.replace(`/${locale}`, "") ?? "/"}
                locale={currentLocale}
              >
                <DropdownMenuItem className="flex cursor-pointer items-start justify-center">
                  {renderFlag(currentLocale)}
                </DropdownMenuItem>
              </Link>
              {index !== filteredLocales.length - 1 && (
                <DropdownMenuSeparator />
              )}
            </Fragment>
          ))}
        </DropdownMenuSubContent>
      </DropdownMenuPortal>
    </DropdownMenuSub>
  );
}
