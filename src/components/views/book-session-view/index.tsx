import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Typography } from "@/components/ui/typography";
import DateSelector from "@/components/views/book-session-view/components/date-selector";

const BookSessionView = () => {
  return (
    <div className="container flex grow items-center justify-center py-2">
      <Card className="flex w-full max-w-[568px] flex-col items-center justify-center gap-10 px-6 py-10">
        <div className="flex items-center gap-5">
          <Image
            src="/images/stylist-avatar.png"
            alt="Book Session"
            width={120}
            height={120}
          />

          <div className="flex max-w-[310px] flex-col gap-2">
            <Typography size="xl" className="font-kaisei">
              Book a Session
            </Typography>
            <Typography size="sm" color="foreground">
              Choose a date and time that is convenient for you to e-meet your
              stylist
            </Typography>
          </div>
        </div>

        <DateSelector />

        <Button className="w-full max-w-[370px]">Confirm</Button>
      </Card>
    </div>
  );
};

export default BookSessionView;
