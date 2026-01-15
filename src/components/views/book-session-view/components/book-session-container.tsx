import { PropsWithChildren } from "react";

import { useBreakpoint } from "@/lib/tailwind";

import { Card } from "@/components/ui/card";
import { DialogTitle } from "@/components/ui/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerScrollArea,
} from "@/components/ui/drawer";

const BookSessionContainer = (props: PropsWithChildren) => {
  const { children } = props;

  const isDesktop = useBreakpoint("md");

  if (isDesktop) {
    return (
      <Card className="flex h-screen max-h-[620px] w-full max-w-[568px] flex-col items-center justify-center gap-10 px-6 py-10">
        {children}
      </Card>
    );
  }

  return (
    <Drawer dismissible={false} open>
      <DrawerContent
        className="h-full max-h-[540px]"
        aria-description="book-session-drawer"
      >
        <DrawerScrollArea
          id="book-session-drawer"
          className="flex flex-col gap-8"
        >
          <DialogTitle className="sr-only">Book a Session</DialogTitle>

          {children}
        </DrawerScrollArea>
      </DrawerContent>
    </Drawer>
  );
};

export default BookSessionContainer;
