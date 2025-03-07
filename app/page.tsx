"use client";
import { Fragment, useCallback, useEffect, useRef, useState } from "react";
import {
  AboutSection,
  FAQ,
  Footer,
  HomePage,
  Offer,
  Services,
} from "./components";

export default function Home() {
  const [isHoveringLink, setIsHoveringLink] = useState(false);
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const pos = useRef({ x: 0, y: 0 });
  const targetPos = useRef({ x: 0, y: 0 });
  const speed = 0.8;

  const handleMouseEnter = useCallback(() => setIsHoveringLink(true), []);
  const handleMouseLeave = useCallback(() => setIsHoveringLink(false), []);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      targetPos.current = { x: e.clientX, y: e.clientY };
      if (cursorRef.current) {
        cursorRef.current.style.opacity = "1";
      }
    };

    const hideCursor = () => {
      if (cursorRef.current) {
        cursorRef.current.style.opacity = "0";
      }
    };

    const updateCursor = () => {
      pos.current.x += (targetPos.current.x - pos.current.x) * speed;
      pos.current.y += (targetPos.current.y - pos.current.y) * speed;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`;
      }

      requestAnimationFrame(updateCursor);
    };

    document.body.addEventListener("mouseenter", moveCursor);
    document.body.addEventListener("mouseleave", hideCursor);
    window.addEventListener("mousemove", moveCursor);

    updateCursor();

    return () => {
      document.body.removeEventListener("mouseenter", moveCursor);
      document.body.removeEventListener("mouseleave", hideCursor);
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <Fragment>
      <HomePage
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
      />

      <AboutSection />

      <Offer />

      <Services />

      <FAQ />

      <Footer />

      <div
        ref={cursorRef}
        className={`hidden md:block fixed top-0 left-0 rounded-full pointer-events-none transition-all duration-300 ease-out ${
          isHoveringLink
            ? "border-2 border-cyan-500 bg-transparent w-7 h-7"
            : "bg-cyan-500 w-5 h-5"
        }`}
        style={{ opacity: 0 }}
      />
    </Fragment>
  );
}
