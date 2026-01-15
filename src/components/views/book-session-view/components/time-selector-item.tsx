import { cva } from "class-variance-authority";

import { cn } from "@/lib/common.lib";
import { calculateIsTimeSlotDisabled } from "@/lib/session.lib";

import { CarouselItem } from "@/components/ui/carousel";
import { Typography } from "@/components/ui/typography";

const buttonVariants = cva(
  "flex h-11 w-[81px] items-center whitespace-nowrap rounded-full border px-4 py-3 transition-colors",
  {
    variants: {
      variant: {
        default: "hoverable:hover:bg-muted",
        selected:
          "bg-foreground-muted [&_small]:font-medium [&_small]:text-destructive",
        disabled:
          "cursor-not-allowed opacity-50 hoverable:hover:bg-transparent",
      },
    },
  },
);

interface Props {
  hour: number;
  minute: number;
  timeString: string;
  isSelected: boolean;
  selectedDate: Date;
  onTimeSelect: () => void;
}

const TimeSelectorItem = (props: Props) => {
  const { hour, minute, timeString, isSelected, selectedDate, onTimeSelect } =
    props;

  const isDisabled = calculateIsTimeSlotDisabled(selectedDate, minute, hour);
  const variant = isSelected ? "selected" : isDisabled ? "disabled" : "default";

  const handleClick = () => {
    if (isDisabled) return;
    onTimeSelect();
  };

  return (
    <CarouselItem className="basis-auto md:basis-1/5">
      <div className="px-1">
        <button
          onClick={handleClick}
          className={buttonVariants({
            variant,
          })}
          aria-disabled={isDisabled}
        >
          <Typography
            size="sm"
            className={cn("cursor-pointer", isDisabled && "cursor-not-allowed")}
          >
            {timeString}
          </Typography>
          {isDisabled && <span className="sr-only">Unavailable</span>}
        </button>
      </div>
    </CarouselItem>
  );
};

export default TimeSelectorItem;
