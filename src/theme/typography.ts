import { CustomThemeConfig } from "tailwindcss/types/config";

const typography: CustomThemeConfig["fontSize"] = {
  sm: [
    "0.875rem", // 14px
    {
      lineHeight: "0.875rem",
      fontWeight: "400",
    },
  ],

  base: [
    "1rem", // 16px
    {
      lineHeight: "1rem",
      fontWeight: "400",
    },
  ],

  lg: [
    "1.375rem", // 22px
    {
      lineHeight: "1.375rem",
      fontWeight: "600",
    },
  ],
  xl: [
    "1.75rem", // 28px
    {
      lineHeight: "1.75rem",
      fontWeight: "700",
    },
  ],
};

export default typography;
