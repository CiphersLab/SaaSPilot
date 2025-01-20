"use client"

import { useTranslations } from "next-intl";
import SectionTitle from "./Common/SectionTitle"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion"

const FAQ = () => {
  const t = useTranslations("FAQ");
  const titleContent = `${t('sectionTitlePart1')} <span class='text-primary'>${t("sectionTitlePart2")}</span> ${t("sectionTitlePart3")} `;
  return (
    <section id="faq">
      <div className="container max-w-[1400px] py-16 md:py-20 lg:py-28 pb-12 md:pb-16 lg:pb-24 mx-auto">
        <div className="mx-auto max-w-md text-center sm:max-w-2xl">          
          <SectionTitle          
          title={titleContent}
          paragraph=""
          center
          width="665px"
        />
        </div>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>{t("question1")}</AccordionTrigger>
            <AccordionContent>{t("answer1")}</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>{t("question2")}</AccordionTrigger>
            <AccordionContent>{t("answer2")}</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}

export default FAQ
