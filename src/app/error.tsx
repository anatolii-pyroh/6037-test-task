"use client";

import { Typography } from "@/components/ui/typography";

interface ErrorProps {
  error: Error;
}

export default function Error(props: ErrorProps) {
  const { error } = props;

  console.error(error);

  return (
    <Typography
      size="xl"
      color="white"
      className="flex size-full grow flex-col items-center justify-center"
    >
      Oops! Something went wrong.
    </Typography>
  );
}
