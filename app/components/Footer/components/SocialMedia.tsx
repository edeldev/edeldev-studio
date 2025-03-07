import { SOCIAL_MEDIA_ICONS } from "@/app/utils/IconsSocialMedia";
import Link from "next/link";
import { ISocialMedia } from "./types";
import { motion } from "framer-motion";

export const SocialMedia = ({ media }: ISocialMedia) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="flex gap-2 items-center justify-center md:justify-start"
    >
      {SOCIAL_MEDIA_ICONS[media.title]}
      <Link
        href={media.link}
        className="font-sans hover:underline"
        target="_blank"
      >
        {media.title}
      </Link>
    </motion.div>
  );
};
