import Image from "next/image";

import { useBreakpoint } from "@/lib/tailwind";

import { Typography } from "@/components/ui/typography";

const SectionHeading = () => {
  const isDesktop = useBreakpoint("md");

  return (
    <div className="flex items-center gap-5">
      <Image
        src="/images/stylist-avatar.png"
        alt="Book Session"
        className="max-md:hidden"
        width={120}
        height={120}
      />

      <div className="space-y-2 md:max-w-[310px]">
        <Typography size="xl" className="font-kaisei">
          Book a Session
        </Typography>
        <Typography size={isDesktop ? "sm" : "md"} color="foreground">
          Choose a date and time that is convenient for you to e-meet your
          stylist
        </Typography>
      </div>
    </div>
  );
};

export default SectionHeading;
