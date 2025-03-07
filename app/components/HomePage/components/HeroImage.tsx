import Image from "next/image";
import IMAGE from "@/public/webs.png";

export const HeroImage = () => {
  return (
    <Image
      src={IMAGE}
      alt="Hero image"
      className="aspect-square w-[300px] h-[200px] lg:w-[550px] lg:h-[350px] object-contain"
    />
  );
};
