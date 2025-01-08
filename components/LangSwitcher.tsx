//LangSwitcher.tsx
"use client";
import React, { startTransition, useState } from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import gbFlag from "../../public/bg_flag.png";
import geFlag from "../../public/german_flag.png";
import { useLocale, useTranslations } from "next-intl";
import { setUserLocale } from "@/services/locale";
import { Locale } from "@/i18n/config";
import { Globe } from "lucide-react";

const LangSwitcher: React.FC = () => {
 interface Option {
   country: string;
   code: Locale;
}

const [isOptionsExpanded, setIsOptionsExpanded] = useState(false);
const t = useTranslations("Languages");
const locale = useLocale();


// { country: "german", code: "de", flag: geFlag },
const options: Option[] = [
   { country: "english", code: "en"},
   { country: "german", code: "de" },
   { country: "arabic", code: "ar" },
 ];


const setOption = (option: Option) => {
  const locale = option.code as Locale;
  startTransition(() => {
    setUserLocale(locale);
  });
}

 return (
   <div className="flex items-center justify-center">
     <div className="relative text-lg">
       <button
         className="justify-between w-full font-medium text-sm px-5 py-2.5 text-center inline-flex items-center"
         onClick={() => setIsOptionsExpanded(!isOptionsExpanded)}
         onBlur={() => setIsOptionsExpanded(false)}
       >
         <Globe />
       </button>
       <div
         className={`transition-transform duration-500 ease-custom ${
           !isOptionsExpanded
             ? "-translate-y-1/2 scale-y-0 opacity-0"
             : "translate-y-0 scale-y-100 opacity-100"
         }`}
       >
         <ul className="absolute mb-4 border divide-y rounded-lg shadow-lg overflow-hidden bg-background">
           {options.map((option, index) => (
             <li
               key={index}
               className="px-4 py-2 transition-colors duration-300 flex items-center cursor-pointer hover:bg-accent hover:text-accent-foreground"
               onMouseDown={(e) => {
                 e.preventDefault();
                 setOption(option);
               }}
               onClick={() => setIsOptionsExpanded(false)}
             >
               {/* <Image
                 src={option.flag}
                 width={"20"}
                 height={"20"}
                 alt="logo"
               /> */}
               &nbsp;&nbsp;{t(option.country)}&nbsp;
               {locale === option.code && (
                 <svg
                   xmlns="http://www.w3.org/2000/svg"
                   fill="none"
                   viewBox="0 0 24 24"
                   stroke="currentColor"
                   className="w-9 h-9 text-green-500 ml-auto"
                 >
                   <path
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     strokeWidth={3}
                     d="M5 13l4 4L19 7"
                   />
                 </svg>
               )}
             </li>
           ))}
         </ul>
       </div>
     </div>
   </div>
 );
};

export default LangSwitcher;