"use client";

import Link from "next/link";
import { GlowingEffect } from "@/app/components/ui/glowing-effect";
import { OFFER } from "@/app/utils/Offer";
import { motion } from "framer-motion";

export const Offer = () => {
  return (
    <ul className="bg-primary p-5 md:p-10 grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
      {OFFER.map((offer) => (
        <GridItem
          key={offer.id}
          area={offer.area}
          icon={offer.icon}
          title={offer.title}
          description={offer.description}
          link={offer.link}
        />
      ))}
    </ul>
  );
};

export interface GridItemProps {
  id?: number;
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
  link?: string;
}

const GridItem = ({ area, icon, title, description, link }: GridItemProps) => {
  return (
    <motion.li
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className={`min-h-[14rem] list-none ${area}`}
    >
      <div className="relative h-full rounded-2.5xl border p-2 md:rounded-3xl md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 bg-[#f0f0f0a6] overflow-hidden rounded-xl border-0.75 p-6 md:p-6">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-gray-600 p-2 ">
              {link ? (
                <Link href={link} target="_blank">
                  {icon}
                </Link>
              ) : (
                icon
              )}
            </div>
            <div className="space-y-3">
              <h3 className="pt-0.5 text-xl/[1.375rem] font-semibold font-sans -tracking-4 md:text-2xl/[1.875rem] text-balance text-black">
                {title}
              </h3>
              <h2
                className="[&_b]:md:font-semibold [&_strong]:md:font-semibold font-sans text-sm/[1.125rem] 
              md:text-base/[1.375rem]  text-black"
              >
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </motion.li>
  );
};
