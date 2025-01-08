"use client"

import SectionTitle from "./Common/SectionTitle"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion"

const FAQ = () => {
  return (
    <section id="faq">
      <div className="container max-w-[840px] py-16 md:py-20 lg:py-28 pb-12 md:pb-16 lg:pb-24 mx-auto">
        <div className="mx-auto max-w-md text-center sm:max-w-2xl">          
          <SectionTitle          
          title="Frequently <span class='text-primary'>Asked</span> Questions"
          paragraph=""
          center
          width="665px"
        />
        </div>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>How does it work?</AccordionTrigger>
            <AccordionContent>Service description content</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>What is your pricing?</AccordionTrigger>
            <AccordionContent>Pricing description content</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}

export default FAQ
