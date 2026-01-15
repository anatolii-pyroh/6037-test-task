import { cn } from "@/lib/common.lib";

import { CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

interface Props {
  className?: string;
}

const CarouselNavigationButtons = ({ className }: Props) => {
  const styles = cn("max-md:hidden", className);

  return (
    <>
      <CarouselPrevious className={styles} />
      <CarouselNext className={styles} />
    </>
  );
};

export default CarouselNavigationButtons;
