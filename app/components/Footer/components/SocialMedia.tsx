import { SOCIAL_MEDIA_ICONS } from "@/app/utils/IconsSocialMedia";
import Link from "next/link";
import { ISocialMedia } from "./types";

export const SocialMedia = ({ media }: ISocialMedia) => {
  return (
    <div className="flex gap-2 items-center justify-center md:justify-start">
      {SOCIAL_MEDIA_ICONS[media.title]}
      <Link
        href={media.link}
        className="font-sans hover:underline"
        target="_blank"
      >
        {media.title}
      </Link>
    </div>
  );
};
