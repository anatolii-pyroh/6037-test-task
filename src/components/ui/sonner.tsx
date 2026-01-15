"use client";

import { Toaster as Sonner } from "sonner";

import { useBreakpoint } from "@/lib/tailwind";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  const isDesktop = useBreakpoint("md");

  return (
    <Sonner
      pauseWhenPageIsHidden
      visibleToasts={1}
      position={isDesktop ? "bottom-right" : "top-center"}
      {...props}
    />
  );
};

export default Toaster;
