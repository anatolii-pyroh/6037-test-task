import type { Metadata } from "next";
import { PropsWithChildren } from "react";

import Body from "@/components/common/body";

import "../theme/theme.css";

export const metadata: Metadata = {
  title: "Anatolii Pyroh 6037 task",
  description: "Anatolii Pyroh test task for 6037",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>

      <Body>{children}</Body>
    </html>
  );
}
