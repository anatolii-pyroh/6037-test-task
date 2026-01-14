import { Config } from "tailwindcss/types/config";

import colors from "./colors";
import container from "./container";
import typography from "./typography";

const theme: Config["theme"] = {
  container,
  fontSize: typography,
  extend: {
    colors: colors,
    fontFamily: {
      kaisei: ["Kaisei Tokumin", "sans"],
    },
  },
};

export default theme;
