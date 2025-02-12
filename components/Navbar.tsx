import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { buttonVariants } from "./ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import MobileNav from "./MobileNav";
import LangSwitcher from "./LangSwitcher";
import { getLocale, getTranslations } from "next-intl/server";
import { ThemeToggle } from "./ThemeToggle";
import Image from "next/image";

let rtlDetector = require("rtl-detect");

const Navbar = async () => {
  const t = await getTranslations("Navbar");
  const currentLocale = await getLocale();

  const isRTL = rtlDetector.isRtlLang(currentLocale);

  return (
    <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between">          
          <Link href="/" className="flex z-40 font-semibold items-center">
          <div className="relative h-12 w-12 mx-4">
            <Image fill alt="Logo" src="/logo.png" />
          </div>

            <span>
              {t("title")}
            </span>
          </Link>

          <MobileNav />

          <div className="hidden items-center sm:flex">            
            
            <Link
              href="/pricing"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              {t("buttons.pricing")}
            </Link>
            <Link
              href="/about-us"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              {t("buttons.aboutUs")}
            </Link>
            <Link
              href="/contact-us"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              {t("buttons.contactUs")}
            </Link>
            <Link
              href="/auth/login"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              {t("buttons.signIn")}
            </Link>
            <Link
              href="/auth/register"
              className={buttonVariants({
                size: "sm",
              })}
            >
              {t("buttons.getStarted")}
              {isRTL ? (
                <ArrowLeft className="mr-1.5 h-5 w-5" />
              ) : (
                <ArrowRight className="ml-1.5 h-5 w-5" />
              )}
            </Link>
            <LangSwitcher />
            <ThemeToggle />
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
