"use client";

import { Carousel, CarouselContent } from "@/components/ui/carousel";
import CarouselNavigationButtons from "@/components/ui/carousel/carousel-navigation-buttons";
import DaySelectorItem from "@/components/views/book-session-view/components/day-selector-item";
import { SessionDateInfo } from "@/typings/date.type";

interface Props {
  dates: SessionDateInfo[];
}

const DaySelector = (props: Props) => {
  const { dates } = props;

  if (dates.length === 0) return <>Loading</>;

  return (
    <Carousel opts={{ dragFree: true, slidesToScroll: 6 }}>
      <CarouselContent className="items-end">
        {dates.map((dateInfo, index) => (
          <DaySelectorItem key={index} dateInfo={dateInfo} />
        ))}
      </CarouselContent>

      <CarouselNavigationButtons className="lg:top-[calc(50%+10.5px)]" />
    </Carousel>
  );
};

export default DaySelector;
