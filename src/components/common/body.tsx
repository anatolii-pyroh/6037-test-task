import { Poppins } from "next/font/google";
import { PropsWithChildren } from "react";

import { cn } from "@/lib/common.lib";
import backgroundImage from "@/public/images/body-background.png";

import ContainerWithBgImage from "@/components/common/container-with-bg-image";
import Header from "@/components/common/header";
import Toaster from "@/components/ui/sonner";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
});

const Body = (props: PropsWithChildren) => {
  const { children } = props;

  return (
    <ContainerWithBgImage
      as="body"
      bgImage={backgroundImage.src}
      className={cn(
        poppins.className,
        "flex flex-col bg-cover bg-center bg-no-repeat md:min-h-screen",
      )}
    >
      <Header />

      <main className="flex flex-1 flex-col">{children}</main>

      <Toaster />
    </ContainerWithBgImage>
  );
};

export default Body;
