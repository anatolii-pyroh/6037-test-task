"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import CarouselNavigationButtons from "@/components/ui/carousel/carousel-navigation-buttons";

const DateSelector = () => {
  return (
    <Carousel>
      <CarouselContent>
        {Array.from({ length: 10 }).map((_, index) => (
          <DateSelectorItem key={index} />
        ))}
      </CarouselContent>

      <CarouselNavigationButtons />
    </Carousel>
  );
};

const DateSelectorItem = () => {
  return (
    <CarouselItem className="basis-1/5 lg:basis-1/6">
      <div className="px-1">
        <button className="size-16 rounded-lg border px-4 py-2">123</button>
      </div>
    </CarouselItem>
  );
};

export default DateSelector;
