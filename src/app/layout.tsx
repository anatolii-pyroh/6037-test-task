import type { Metadata } from "next";
import { PropsWithChildren } from "react";
import { Toaster } from "sonner";

import Header from "@/components/common/header";

import "../theme/theme.css";

export const metadata: Metadata = {
  title: {
    template: "%s | 6037 task",
    default: "6037 task",
  },
  description: "Anatolii Pyroh test task for 6037",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>

      <body className="flex min-h-screen flex-col">
        <Header />

        <main className="flex min-h-[80vh] flex-1 flex-col">{children}</main>

        <Toaster />
      </body>
    </html>
  );
}
