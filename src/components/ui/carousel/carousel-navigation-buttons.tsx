import { CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

interface Props {
  className?: string;
}

const CarouselNavigationButtons = ({ className }: Props) => {
  return (
    <>
      <CarouselPrevious className={className} />
      <CarouselNext className={className} />
    </>
  );
};

export default CarouselNavigationButtons;
