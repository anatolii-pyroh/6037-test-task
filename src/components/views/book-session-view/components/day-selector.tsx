"use client";

import { SetState } from "@/typings/common.type";
import { Session, SessionDateOption } from "@/typings/date.type";

import { Carousel, CarouselContent } from "@/components/ui/carousel";
import CarouselNavigationButtons from "@/components/ui/carousel/carousel-navigation-buttons";
import DaySelectorItem from "@/components/views/book-session-view/components/day-selector-item";

interface Props {
  dates: SessionDateOption[];
  session: Session;
  setSession: SetState<Session>;
}

const DaySelector = (props: Props) => {
  const { dates, session, setSession } = props;

  if (dates.length === 0) return <>Loading</>;

  const handleDateSelect = (date: SessionDateOption) => {
    setSession({
      date: date.date,
      time: "",
      timestamp: null,
    });
  };

  return (
    <Carousel opts={{ dragFree: true, slidesToScroll: 6 }}>
      <CarouselContent className="items-end">
        {dates.map((dateInfo, index) => (
          <DaySelectorItem
            key={index}
            dateInfo={dateInfo}
            isSelected={session?.date === dateInfo.date}
            onDateSelect={handleDateSelect}
          />
        ))}
      </CarouselContent>

      <CarouselNavigationButtons className="lg:top-[calc(50%+10.5px)]" />
    </Carousel>
  );
};

export default DaySelector;
