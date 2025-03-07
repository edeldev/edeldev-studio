import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/app/components/ui";
import { QUESTIONS } from "@/app/utils/faq";
import { ChevronRight } from "lucide-react";
import { Fragment } from "react";
import { IFaqItem } from "./types";
import { motion } from "framer-motion";

const FAQItem = ({ value, question, answer }: IFaqItem) => (
  <Fragment>
    <AccordionItem value={value} className="py-8">
      <AccordionTrigger className="w-full py-0.5 text-left text-zinc-950">
        <div className="flex items-center">
          <ChevronRight className="h-4 w-4 text-zinc-950 transition-transform duration-200 group-data-expanded:rotate-90" />
          <div className="ml-2 text-zinc-950 text-3xl font-sans">
            {question}
          </div>
        </div>
      </AccordionTrigger>
      <AccordionContent className="origin-left">
        <p className="pl-6 pr-2 text-zinc-500 font-sans">{answer}</p>
      </AccordionContent>
    </AccordionItem>
    <hr className="border-[1px] border-black" />
  </Fragment>
);

export const AccordionFAQ = () => {
  return (
    <Accordion
      className="flex w-full flex-col"
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
      variants={{
        expanded: { opacity: 1, scale: 1 },
        collapsed: { opacity: 0, scale: 0.7 },
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {QUESTIONS.map((item) => (
          <FAQItem key={item.value} {...item} />
        ))}
      </motion.div>
    </Accordion>
  );
};
