"use client";

interface ErrorProps {
  error: Error;
}

export default function Error(props: ErrorProps) {
  const { error } = props;

  console.error(error);

  return (
    <div className="flex size-full grow flex-col items-center justify-center">
      Error
    </div>
  );
}
