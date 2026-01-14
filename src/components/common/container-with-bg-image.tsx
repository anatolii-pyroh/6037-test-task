import { PropsWithChildren } from "react";

import { cn } from "@/lib/common.lib";
import { HtmlElementProps } from "@/typings/common.type";

type Props = PropsWithChildren &
  HtmlElementProps<HTMLDivElement> & {
    bgImage: string;
    as?: React.ElementType;
  };

const ContainerWithBgImage = (props: Props) => {
  const {
    bgImage,
    children,
    className,
    as: ComponentProp,
    ...divProps
  } = props;

  const Component = ComponentProp || "div";

  return (
    <Component
      className={cn(
        "bg-[url:var(--bg-image)] bg-contain bg-no-repeat",
        className,
      )}
      style={{ "--bg-image": `url(${bgImage})` } as React.CSSProperties}
      {...divProps}
    >
      {children}
    </Component>
  );
};

export default ContainerWithBgImage;
