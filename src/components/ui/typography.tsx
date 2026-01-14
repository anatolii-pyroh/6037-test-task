"use client";

import { cva, VariantProps } from "class-variance-authority";
import { PropsWithChildren } from "react";

import { cn } from "@/lib/common.lib";

export interface TypographyProps
  extends PropsWithChildren,
    VariantProps<typeof variantsClasses> {
  className?: string;
  as?: React.ElementType;
  onClick?: () => void;
}

const sizeComponentMap: Record<
  NonNullable<TypographyProps["size"]>,
  React.ElementType
> = {
  sm: "small",
  md: "div",
  lg: "h4",
  xl: "h2",
};

const variantsClasses = cva(["inline-block cursor-auto"], {
  variants: {
    size: {
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
      xl: "text-xl",
    },
    color: {
      default: "text-black",
      white: "text-white",
      foreground: "text-foreground",
    },
  },
});

const Typography = ({
  className,
  size = "md",
  color = "default",
  as: ComponentProp,
  onClick,
  ...props
}: TypographyProps) => {
  const Component = ComponentProp || sizeComponentMap[size || "md"];

  return (
    <Component
      className={cn(variantsClasses({ size, color }), className)}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      {...props}
    />
  );
};

export { Typography };
