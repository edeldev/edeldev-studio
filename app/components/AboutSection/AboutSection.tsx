import { PROEYCTS } from "@/app/utils/AboutParallax";
import { HeroParallax } from "../ui";

export const AboutSection = () => {
  return (
    <main id="about" className="bg-primary flex flex-col gap-8">
      <HeroParallax products={PROEYCTS} />
    </main>
  );
};
