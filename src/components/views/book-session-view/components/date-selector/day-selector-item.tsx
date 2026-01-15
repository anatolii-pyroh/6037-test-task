import { cva } from "class-variance-authority";

import { SessionDateOption } from "@/typings/session.type";

import { CarouselItem } from "@/components/ui/carousel";
import { Typography } from "@/components/ui/typography";

const buttonVariants = cva(
  "flex size-16 flex-col items-center justify-center rounded-lg border px-4 py-2 transition-colors hoverable:hover:bg-muted",
  {
    variants: {
      variant: {
        default: "hoverable:hover:bg-muted",
        selected:
          "bg-foreground-muted [&_div]:font-medium [&_div]:text-destructive",
      },
    },
  },
);

interface Props {
  dateInfo: SessionDateOption;
  isSelected: boolean;
  onDateSelect: (date: SessionDateOption) => void;
}

const DaySelectorItem = (props: Props) => {
  const { dateInfo, isSelected, onDateSelect } = props;

  const { dayName, dayNumber, month, isFirstDay, isLastDay } = dateInfo;

  const showMonth = isFirstDay || isLastDay;
  const variant = isSelected ? "selected" : "default";

  return (
    <CarouselItem className="basis-auto md:basis-1/6">
      <div className="relative px-1">
        {showMonth ? (
          <Typography size="sm" color="foreground">
            {month}
          </Typography>
        ) : null}

        <button
          onClick={() => onDateSelect(dateInfo)}
          className={buttonVariants({
            variant,
          })}
        >
          <Typography className="cursor-pointer">{dayName}</Typography>
          <Typography className="cursor-pointer">{dayNumber}</Typography>
        </button>
      </div>
    </CarouselItem>
  );
};

export default DaySelectorItem;
