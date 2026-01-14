"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import CarouselNavigationButtons from "@/components/ui/carousel/carousel-navigation-buttons";

const TimeSelector = () => {
  return (
    <Carousel>
      <CarouselContent>
        {Array.from({ length: 10 }).map((_, index) => (
          <TimeSelectorItem key={index} />
        ))}
      </CarouselContent>

      <CarouselNavigationButtons />
    </Carousel>
  );
};

const TimeSelectorItem = () => {
  return (
    <CarouselItem className="basis-1/4 lg:basis-1/5">
      <div className="px-1">
        <button className="h-11 w-[79px] rounded-[72px] border px-4 py-2">
          123
        </button>
      </div>
    </CarouselItem>
  );
};

export default TimeSelector;
