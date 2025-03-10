import Link from "next/link";
import { HeroImage } from "./HeroImage";
import { AnimatedTooltipPreview } from "./Testimonials";
import { IHero } from "./types";
import { motion } from "framer-motion";

export const Hero = ({ handleMouseEnter, handleMouseLeave }: IHero) => {
  return (
    <section className="min-h-screen flex flex-col md:flex-row justify-center gap-5 md:gap-[10rem] items-center relative text-white px-10 lg:px-40 py-40 md:py-0">
      <motion.div
        className="flex flex-col gap-5"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="order-2 md:order-1">
          <p className="text-sm font-light mb-2">+ 50 lo amarón</p>
          <AnimatedTooltipPreview />
        </div>
        <h1 className="text-5xl md:text-6xl md:order-2">
          Diseñamos <span className="font-alumni">tu</span>
          <span className="block italic uppercase">presencia digital</span>
        </h1>

        <h2 className="md:order-2 text-xl font-light font-sans md:w-[65%]">
          Creamos sitios web modernos y funcionales que potencian tu marca y
          generan resultados.
        </h2>

        <Link
          href="https://wa.me/8123697420/?text=Hola,%20quiero%una%página%web"
          target="_blank"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="order-3 cursor-pointer self-start px-6 py-1 text-lg font-semibold text-black bg-[#14EEFF] rounded-lg shadow-[0_4px_10px_rgba(20,238,255,0.5)] hover:bg-[#14efffcb] transition"
        >
          Lo quiero
        </Link>
      </motion.div>

      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <HeroImage />
      </motion.div>
    </section>
  );
};
