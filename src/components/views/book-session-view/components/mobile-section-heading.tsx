import Image from "next/image";

import { Clock } from "@/icons";
import mobileMaskImage from "@/public/images/mobile-mask-image.png";
import stylistImage from "@/public/images/stylist.png";

import ContainerWithBgImage from "@/components/common/container-with-bg-image";
import { Badge } from "@/components/ui/badge";
import { Icon } from "@/components/ui/icon";
import { Typography } from "@/components/ui/typography";

const MobileSectionHeading = () => {
  return (
    <ContainerWithBgImage
      bgImage={mobileMaskImage.src}
      className="flex size-full items-center justify-between overflow-hidden bg-[#F29B18] bg-cover bg-top bg-no-repeat pl-5"
    >
      <div className="flex flex-1 flex-col">
        <Typography size="xl" color="white" className="text-[27px]">
          Cool session
        </Typography>
        <Typography size="sm" className="mb-6 font-light text-white/80">
          Additional type
        </Typography>

        <Badge variant="default">
          <Icon size="sm" svg={Clock} />
          <Typography color="white" size="sm" className="text-[13px]">
            30 min
          </Typography>
        </Badge>
      </div>

      <StylistImage />
    </ContainerWithBgImage>
  );
};

const StylistImage = () => {
  return (
    <div className="relative flex-1">
      <div className="absolute -right-24 -top-24 size-[301px] rounded-full border-4 border-[#FFAD32] bg-[#AD5708]">
        <Image
          src={stylistImage.src}
          alt="Stylist"
          width={200}
          height={290}
          className="absolute -top-8 left-4 h-[290px] object-contain"
        />
      </div>
    </div>
  );
};

export default MobileSectionHeading;
