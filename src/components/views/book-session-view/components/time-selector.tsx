import { setHours, setMinutes } from "date-fns";
import { useState } from "react";

import { generateTimeSlots } from "@/lib/session.lib";
import { SetState } from "@/typings/common.type";
import { Session } from "@/typings/session.type";

import { Carousel, CarouselContent } from "@/components/ui/carousel";
import CarouselNavigationButtons from "@/components/ui/carousel/carousel-navigation-buttons";
import TimeSelectorItem from "@/components/views/book-session-view/components/time-selector-item";

interface Props {
  session: NonNullable<Session>;
  setSession: SetState<Session>;
}

const TimeSelector = (props: Props) => {
  const { session, setSession } = props;

  const [timeSlots, setTimeSlots] = useState(() => {
    return generateTimeSlots(session.date);
  });

  const handleTimeSelect = (
    hour: number,
    minute: number,
    timeString: string,
  ) => {
    const selectedDateTime = setHours(setMinutes(session.date, minute), hour);
    const timestamp = Math.floor(selectedDateTime.getTime() / 1000);

    setSession({
      ...session,
      timestamp,
      time: timeString,
    });
  };

  return (
    <Carousel className="max-w-[435px]" opts={{ slidesToScroll: 5 }}>
      <CarouselContent>
        {timeSlots.map(({ hour, minute, timeString }, index) => (
          <TimeSelectorItem
            key={index}
            hour={hour}
            minute={minute}
            timeString={timeString}
            isSelected={session.time === timeString}
            selectedDate={session.date}
            onTimeSelect={() => handleTimeSelect(hour, minute, timeString)}
          />
        ))}
      </CarouselContent>

      <CarouselNavigationButtons />
    </Carousel>
  );
};

export default TimeSelector;
