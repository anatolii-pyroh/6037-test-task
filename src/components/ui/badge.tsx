import { cva, VariantProps } from "class-variance-authority";
import { PropsWithChildren } from "react";

import { cn } from "@/lib/common.lib";

const badgeVariants = cva(
  "flex h-7 w-fit items-center gap-2 rounded-full px-3 py-1",
  {
    variants: {
      variant: {
        default: "bg-[#FFFFFF29]",
      },
    },
  },
);

interface Props extends PropsWithChildren, VariantProps<typeof badgeVariants> {
  className?: string;
}

export const Badge = (props: Props) => {
  const { children, variant = "default", className } = props;

  return (
    <div className={cn(badgeVariants({ variant }), className)}>{children}</div>
  );
};
