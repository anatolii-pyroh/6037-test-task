import { Clock } from "@/icons";
import mobileMaskImage from "@/public/images/mobile-mask-image.png";

import ContainerWithBgImage from "@/components/common/container-with-bg-image";
import { Badge } from "@/components/ui/badge";
import { Icon } from "@/components/ui/icon";
import { Typography } from "@/components/ui/typography";

const MobileSectionHeading = () => {
  return (
    <ContainerWithBgImage
      bgImage={mobileMaskImage.src}
      className="flex size-full items-center justify-between bg-[#F29B18] bg-cover bg-top bg-no-repeat pl-5"
    >
      <div className="flex flex-col">
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

      <div className="flex flex-col text-white">images here</div>
    </ContainerWithBgImage>
  );
};

export default MobileSectionHeading;
