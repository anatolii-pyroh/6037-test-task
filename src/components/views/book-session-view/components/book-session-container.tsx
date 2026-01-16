import { PropsWithChildren } from "react";
import { useIsClient } from "usehooks-ts";

import { cn } from "@/lib/common.lib";
import { useBreakpoint } from "@/lib/tailwind";

import PageSpinner from "@/components/common/page-spinner";
import { Card } from "@/components/ui/card";
import MobileSectionHeading from "@/components/views/book-session-view/components/mobile-section-heading";

const BookSessionContainer = (props: PropsWithChildren) => {
  const { children } = props;

  const isClient = useIsClient();
  const isDesktop = useBreakpoint("md");

  if (!isClient) {
    return <PageSpinner />;
  }

  if (isDesktop) {
    return (
      <div className="container flex grow items-center justify-center py-2">
        <Card className="flex h-screen max-h-[620px] w-full max-w-[568px] flex-col items-center justify-center gap-10 px-6 py-10">
          {children}
        </Card>
      </div>
    );
  }

  return (
    <>
      <MobileSectionHeading />

      <div
        className={cn(
          "absolute inset-x-0 bottom-0 z-10 flex h-[65dvh] flex-col overflow-y-auto overflow-x-hidden rounded-t-[24px] bg-white px-5 py-8",
        )}
      >
        {children}
      </div>
    </>
  );
};

export default BookSessionContainer;
