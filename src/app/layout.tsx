import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { PropsWithChildren } from "react";
import { Toaster } from "sonner";

import { cn } from "@/lib/common.lib";

import Header from "@/components/common/header";

import "../theme/theme.css";

const poppins = Poppins({ weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Anatolii Pyroh 6037 task",
    default: "Anatolii Pyroh 6037 task",
  },
  description: "Anatolii Pyroh test task for 6037",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>

      <body className={cn(poppins.className, "flex min-h-screen flex-col")}>
        <Header />

        <main className="flex min-h-[80vh] flex-1 flex-col">{children}</main>

        <Toaster />
      </body>
    </html>
  );
}
