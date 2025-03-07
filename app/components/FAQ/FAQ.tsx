import Link from "next/link";
import { AccordionFAQ } from "./components";
import { IconExternalLink } from "@tabler/icons-react";
import { motion } from "framer-motion";

export const FAQ = () => {
  return (
    <main className="bg-primary p-5 md:p-10">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="md:col-span-3 text-center md:text-left order-2 md:order-1"
        >
          <h3 className="text-xl font-semibold mb-3">
            ¿No has encontrado respuesta?
          </h3>
          <p className="font-sans text-sm text-justify md:text-left">
            No te preocupes. Si tienes alguna otra pregunta o necesitas más
            información, no dudes en ponerte en contacto con nosotros
            directamente.
          </p>

          <div className="flex items-center mt-5 md:mt-10 justify-center md:justify-start">
            <div className="relative flex items-center gap-2 group">
              <Link
                href="https://wa.me/8123697420/?text=Hola,%20quiero%hacer%una%pregunta"
                className="font-sans"
                target="_blank"
              >
                Pregunta lo que quieras
              </Link>
              <IconExternalLink
                size={18}
                stroke={1}
                className="transition-all duration-300 group-hover:stroke-2 group-hover:scale-110"
              />
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-black h-[0.1rem] w-full transition-all duration-300 group-hover:w-[115%]"></div>
            </div>
          </div>
        </motion.div>

        <div className="md:col-span-9 order-1 md:order-2">
          <h2 className="text-3xl md:text-5xl mb-5 text-center md:text-left">
            ¿Tienes preguntas?
          </h2>
          <AccordionFAQ />
        </div>
      </div>
    </main>
  );
};
