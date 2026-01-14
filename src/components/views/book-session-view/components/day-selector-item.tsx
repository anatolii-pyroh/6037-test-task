import { cn } from "@/lib/common.lib";
import { SessionDateOption } from "@/typings/date.type";

import { CarouselItem } from "@/components/ui/carousel";
import { Typography } from "@/components/ui/typography";

interface Props {
  dateInfo: SessionDateOption;
  isSelected: boolean;
  onDateSelect: (date: SessionDateOption) => void;
}

const DaySelectorItem = (props: Props) => {
  const { dateInfo, isSelected, onDateSelect } = props;

  const { dayName, dayNumber, month, isFirstDay, isLastDay } = dateInfo;

  const showMonth = isFirstDay || isLastDay;

  return (
    <CarouselItem className=" basis-1/5 lg:basis-1/6">
      <div className="relative px-1">
        {showMonth ? (
          <Typography size="sm" color="foreground">
            {month}
          </Typography>
        ) : null}

        <button
          onClick={() => onDateSelect(dateInfo)}
          className={cn(
            "flex size-16 flex-col items-center justify-center rounded-lg border px-4 py-2 transition-colors hoverable:hover:bg-muted",
            isSelected &&
              "bg-[#F7F7FC] [&_div]:font-medium [&_div]:text-destructive",
          )}
        >
          <Typography className="cursor-pointer">{dayName}</Typography>
          <Typography className="cursor-pointer">{dayNumber}</Typography>
        </button>
      </div>
    </CarouselItem>
  );
};

export default DaySelectorItem;
