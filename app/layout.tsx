import Providers from "@/components/Providers";
import { cn, constructMetadata } from "@/lib/utils";
import { Inter } from "next/font/google";

import "react-loading-skeleton/dist/skeleton.css";
import "simplebar-react/dist/simplebar.min.css";

import { Toaster } from "@/components/ui/toaster";
import {NextIntlClientProvider} from 'next-intl';
import { auth } from "@/auth";
import { getLocale, getMessages } from "next-intl/server";


import { headers } from "next/headers";
import { ThemeProvider } from "./providers/theme-provider";
import {getLangDir} from 'rtl-detect';

import "./globals.css";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import { SiteFooter } from "@/components/site-footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = constructMetadata();

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  const direction = getLangDir(locale);

  // // Providing all messages to the client
  // // side is the easiest way to get started
  const messages = await getMessages();

  const session = await auth();

  return (
    <html lang={locale} dir={direction} className="light" suppressHydrationWarning={true}>
      <Head>
      <link rel="shortcut icon" href="/favicon.ico" />

      </Head>
      <Providers session={session}>
        <body
          className={cn(
            "min-h-screen font-sans antialiased grainy",
            inter.className
          )}
        >
            <NextIntlClientProvider messages={messages}>     
              <ThemeProvider attribute="class" defaultTheme="system" enableSystem>                  
                <Toaster />                                               
                {(!session) && (                  
                  <Navbar />                  
                )}
                {children}
                {/* <h1>Main is here</h1> */}
                {(!session) && (
                  <SiteFooter />  
                )}                
              </ThemeProvider>
            </NextIntlClientProvider>
          
        </body>
      </Providers>
    </html>
  );
}



// 4A6CF7 - main
// 5D32F5- option1 pak green
// 00BAC7 - option2 sky green
// 8DA8FF new Logo (225.79, 100%, 77.65%)
// 4664FE new Logo hsl(230.22, 98.92%, 63.53%)
// 253 91% 58%;