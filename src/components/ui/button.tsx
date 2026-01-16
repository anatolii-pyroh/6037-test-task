import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import clsx from "clsx";
import * as React from "react";

import { Loader } from "@/icons";
import { cn } from "@/lib/common.lib";

import { Icon } from "@/components/ui/icon";

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2 py-[18px]",
    "rounded-full transition-colors",
    "whitespace-nowrap text-sm font-semibold",
    "hover:shadow-none",
    "touch-manipulation",
    "disabled:pointer-events-none disabled:border-0 disabled:bg-inactive disabled:shadow-none",
  ],
  {
    variants: {
      variant: {
        default: "bg-black text-white shadow-md hover:bg-black/80",
        transparent: "bg-transparent text-black hover:no-underline",
      },
      size: {
        sm: "h-8",
        md: "h-10",
        lg: "h-[60px]",
      },
    },
  },
);

const iconSizeMap = {
  sm: "sm",
  md: "md",
  lg: "md",
} as const;

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    Omit<VariantProps<typeof buttonVariants>, "iconOnly" | "withIcon"> {
  loading?: boolean;
  asChild?: boolean;
  svg?: React.ComponentProps<typeof Icon>["svg"];
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "default",
      size = "lg",
      svg,
      children,
      asChild = false,
      disabled,
      loading,
      type = "button",
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";
    const withIcon = !!svg || !!loading;

    return (
      <Comp
        className={cn(
          buttonVariants({
            variant,
            size,
            className,
          }),
        )}
        ref={ref}
        type={type}
        disabled={disabled || loading}
        {...props}
      >
        {withIcon ? (
          <>
            <Icon
              className={clsx(
                "text-current",
                loading ? "animate-[spin_3s_linear_infinite]" : "",
              )}
              svg={loading ? Loader : svg}
              size={size ? iconSizeMap[size] : undefined}
            />

            {children}
          </>
        ) : (
          children
        )}
      </Comp>
    );
  },
);

Button.displayName = "Button";

export { Button, buttonVariants };
