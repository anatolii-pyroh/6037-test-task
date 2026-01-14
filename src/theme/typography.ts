import { CustomThemeConfig } from "tailwindcss/types/config";

const typography: CustomThemeConfig["fontSize"] = {
  sm: [
    "0.875rem", // 14px
    {
      fontWeight: "400",
    },
  ],

  base: [
    "1rem", // 16px
    {
      fontWeight: "400",
    },
  ],

  lg: [
    "1.375rem", // 22px
    {
      fontWeight: "600",
    },
  ],
  xl: [
    "1.75rem", // 28px
    {
      fontWeight: "700",
    },
  ],
};

export default typography;
