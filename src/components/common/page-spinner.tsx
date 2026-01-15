import { Spinner } from "@/components/ui/spinner";
import { cn } from "@/lib/common.lib";

interface PageSpinnerProps {
  className?: string;
}

const PageSpinner = ({ className }: PageSpinnerProps) => {
  return (
    <div
      className={cn(
        "flex h-screen w-full items-center justify-center",
        className,
      )}
    >
      <Spinner className="absolute left-1/2 top-1/2 -ml-5 -mt-5" />
    </div>
  );
};

export default PageSpinner;
