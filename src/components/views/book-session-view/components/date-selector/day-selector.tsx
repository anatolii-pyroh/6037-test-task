import { SetState } from "@/typings/common.type";
import { Session, SessionDateOption } from "@/typings/session.type";

import { Carousel, CarouselContent } from "@/components/ui/carousel";
import CarouselNavigationButtons from "@/components/ui/carousel/carousel-navigation-buttons";
import DaySelectorItem, {
  DaySelectorItemSkeleton,
} from "@/components/views/book-session-view/components/date-selector/day-selector-item";

interface Props {
  dates: SessionDateOption[];
  session: Session;
  setSession: SetState<Session>;
}

const DaySelector = (props: Props) => {
  const { dates, session, setSession } = props;

  if (!dates.length) {
    return (
      <Carousel className="pt-6 md:max-w-[430px]" opts={{ slidesToScroll: 6 }}>
        <CarouselContent>
          {Array.from({ length: 10 }).map((_, index) => (
            <DaySelectorItemSkeleton key={index} />
          ))}
        </CarouselContent>
      </Carousel>
    );
  }

  const handleDateSelect = (date: SessionDateOption) => {
    setSession({
      date: date.date,
      time: null,
      timestamp: null,
    });
  };

  return (
    <Carousel className="md:max-w-[430px]" opts={{ slidesToScroll: 6 }}>
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

      <CarouselNavigationButtons className="md:top-[calc(50%+10.5px)]" />
    </Carousel>
  );
};

export default DaySelector;
