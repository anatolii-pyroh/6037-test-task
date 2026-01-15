import * as React from "react";

import { cn } from "@/lib/common.lib";

export interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {}

function Spinner({ className, ...props }: SpinnerProps) {
  return (
    <div
      className={cn(
        "size-8 animate-spin rounded-full border-8 border-t-orange-400",
        className,
      )}
      {...props}
    />
  );
}

Spinner.displayName = "Spinner";

export { Spinner };
