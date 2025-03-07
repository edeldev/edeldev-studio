import Link from "next/link";
import {
  IconExternalLink,
  IconRosetteDiscountCheckFilled,
} from "@tabler/icons-react";
import { ICardService } from "./types";
import { motion } from "framer-motion";

export const CardService = ({ service }: ICardService) => {
  const { title, icon, price, duration, services, link } = service;

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="flex flex-col p-10 justify-start border-[1rem] rounded-lg border-black gap-5 flex-wrap"
    >
      <div>
        <div className="flex items-center justify-center gap-3 mb-5">
          {icon}
          <h3 className="font-alumni font-bold text-3xl md:text-5xl">
            {title}
          </h3>
        </div>

        <span className="font-mono text-xs">A partir de </span>
        <p className="text-4xl -mt-2 mb-3">{price}</p>

        <p className="text-secondary">{duration}</p>
        <p className="font-sans text-xs text-secondary">
          Los precios varían dependiendo de cada proyecto.
          <span className="block"> (IVA no incluido).</span>
        </p>
      </div>

      <div className="flex flex-col gap-5 items-start h-[350px] overflow-auto">
        {services?.map((service) => (
          <div
            key={service.id}
            className="flex justify-center items-center gap-2"
          >
            <IconRosetteDiscountCheckFilled
              className="text-secondary w-[18px] h-[18px] md:w-[24px] md:h-[24px]"
              stroke={1}
            />
            <p className="font-sans text-secondary text-sm md:text-base">
              {service.title}
            </p>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-end">
        <div className="relative flex items-center gap-2 group">
          <Link href={link} className="font-sans" target="_blank">
            Comenzamos
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
  );
};
