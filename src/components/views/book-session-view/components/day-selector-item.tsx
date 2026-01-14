import { CarouselItem } from "@/components/ui/carousel";
import { Typography } from "@/components/ui/typography";
import { SessionDateInfo } from "@/typings/date.type";

interface Props {
  dateInfo: SessionDateInfo;
}

const DaySelectorItem = ({ dateInfo }: Props) => {
  const showMonth = dateInfo.isFirstDay || dateInfo.isLastDay;

  return (
    <CarouselItem className=" basis-1/5 lg:basis-1/6">
      <div className="relative px-1">
        {showMonth ? (
          <Typography size="sm" color="foreground">
            {dateInfo.month}
          </Typography>
        ) : null}

        <button className="flex size-16 flex-col items-center justify-center rounded-lg border px-4 py-2 transition-colors hoverable:hover:bg-muted">
          <span className="text-sm font-medium">{dateInfo.dayName}</span>
          <span className="text-lg font-semibold">{dateInfo.dayNumber}</span>
        </button>
      </div>
    </CarouselItem>
  );
};

export default DaySelectorItem;
