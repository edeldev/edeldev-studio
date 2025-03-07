import Image from "next/image";
import { Contact, SocialMedia } from "./components";
import LOGO from "@/public/edeldev.webp";
import Link from "next/link";
import { SOCIAL_MEDIA } from "@/app/utils/SocialMedia";
import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <footer id="footer" className="p-5 md:p-10 text-white bg-[#202020D6]">
      <Contact />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="hidden md:block"
      >
        <Link href="#home" className="my-20 flex justify-center">
          <Image src={LOGO} alt="logo" width={500} height={500} />
        </Link>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="md:col-span-7"
        >
          <p className="text-2xl md:text-6xl uppercase font-light text-center md:text-start">
            Tu proyecto <br /> te espera
          </p>
        </motion.div>

        <div className="md:col-span-5 flex gap-5 flex-wrap justify-center md:justify-end">
          {SOCIAL_MEDIA.map((media) => (
            <SocialMedia key={media.id} media={media} />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 mt-10 md:mt-20">
        <p className="md:col-span-4 md:col-start-9 font-sans text-center md:text-end">
          &copy; 2025 EDELDEV. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
