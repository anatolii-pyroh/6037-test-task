import { PropsWithChildren } from "react";
import { useIsClient } from "usehooks-ts";

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
    <div className="flex h-screen flex-col">
      <MobileSectionHeading />

      <div className="-mt-5 flex h-screen max-h-fit min-h-[50dvh] shrink-0 flex-col gap-8 overflow-hidden rounded-t-[24px] bg-white px-5 py-8 max-sm:min-h-[65dvh]">
        {children}
      </div>
    </div>
  );
};

export default BookSessionContainer;
