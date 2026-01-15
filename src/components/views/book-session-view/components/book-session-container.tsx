import { PropsWithChildren } from "react";
import { useIsClient } from "usehooks-ts";

import { useBreakpoint } from "@/lib/tailwind";
import mobileBodyBackground from "@/public/images/mobile-body-background.png";

import ContainerWithBgImage from "@/components/common/container-with-bg-image";
import PageSpinner from "@/components/common/page-spinner";
import { Card } from "@/components/ui/card";

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
      <ContainerWithBgImage
        bgImage={mobileBodyBackground.src}
        className="size-full bg-cover bg-center bg-no-repeat"
      />

      <div className="-mt-5 flex h-screen max-h-fit min-h-[50dvh] shrink-0 flex-col gap-8 overflow-hidden rounded-t-[24px] bg-white px-5 py-8 max-sm:min-h-[65dvh]">
        {children}
      </div>
    </div>
  );
};

export default BookSessionContainer;
