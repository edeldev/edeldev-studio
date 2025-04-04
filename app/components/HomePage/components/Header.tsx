"use client";
import { Fragment, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll } from "framer-motion";
import LOGO_WHITE from "@/public/edeldev.webp";
import LOGO_BLACK from "@/public/dark-edeldev.webp";
import { IHeader } from "./types";
import { MenuNavbar } from "./MenuNavbar";

export const Header = ({ handleMouseEnter, handleMouseLeave }: IHeader) => {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(scrollY.get() > window.innerHeight);
    };

    const unsubscribe = scrollY.on("change", handleScroll);
    return () => unsubscribe();
  }, [scrollY]);

  return (
    <Fragment>
      <motion.nav
        className="flex justify-between items-center p-5 md:p-10 w-full fixed h-[6rem] z-20"
        animate={{ color: isScrolled ? "#000" : "#fff" }}
      >
        <div className="hidden md:flex flex-1">
          <Link
            href="https://wa.me/8123697420/?text=Hola,%20quiero%20contarte%20sobre%20mi%20proyecto"
            target="_blank"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Cuéntanos tu proyecto
          </Link>
        </div>

        <Link
          href="#menu"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={isScrolled ? LOGO_BLACK : LOGO_WHITE}
              alt="logo"
              className="aspect-square w-[150px] h-[70px]"
            />
          </motion.div>
        </Link>

        <div className="flex-1 flex justify-end">
          <p
            className="cursor-pointer"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => setOpen(true)}
          >
            Menu
          </p>
        </div>
      </motion.nav>
      <MenuNavbar open={open} setOpen={setOpen} />
    </Fragment>
  );
};
