import { create } from "@kodingdotninja/use-tailwind-breakpoint";
import { screens } from "tailwindcss/defaultTheme";

export const { useBreakpoint, useBreakpointEffect, useBreakpointValue } =
  create(screens as Record<string, string>);
