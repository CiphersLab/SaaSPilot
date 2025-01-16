"use client"

import { Fragment, startTransition } from "react"
import { setUserLocale } from "@/services/locale";
import { buttonVariants } from "./ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"
import { renderFlag } from "./render-flag"

import { locales } from "@/i18n/config"
import { useLocale } from "next-intl"
import Link from "next/link"


export function LanguageSwitcher() {
  const locale = useLocale()

  const setOption = (langKey: any) => {    
    startTransition(() => {
      setUserLocale(langKey);
    });
  }

  const filteredLocales = locales?.filter(
    (currentLocale) => currentLocale !== locale
  )
  // // const pathname = usePathname()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={`${cn(
          buttonVariants({ size: "sm", variant: "secondary" }),
          "p-3"
        )}`}
      >
        {/* className="flex h-10 w-10 items-center justify-center rounded-md border transition-colors hover:bg-muted"> */}
        {renderFlag(locale)}
        <span className="sr-only">Languages</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center">
        {filteredLocales?.map((currentLocale, index) => (
          <Fragment key={index}>
            <Link
              href="/"              
              locale={currentLocale}
              onClick={(e) => {
                e.preventDefault();
                setOption(currentLocale);
              }}
            >
              <DropdownMenuItem className="flex cursor-pointer items-start justify-center">
                {renderFlag(currentLocale)}
              </DropdownMenuItem>
            </Link>
            {index !== filteredLocales.length - 1 && <DropdownMenuSeparator />}
          </Fragment>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
