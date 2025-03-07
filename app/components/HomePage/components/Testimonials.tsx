import { AnimatedTooltip } from "@/app/components/ui";
import { TESTIMONIAL_PEOPLE } from "@/app/utils/TestimonialsTooltip";

export const AnimatedTooltipPreview = () => {
  return (
    <div className="flex flex-row items-center w-full">
      <AnimatedTooltip items={TESTIMONIAL_PEOPLE} />
    </div>
  );
};
