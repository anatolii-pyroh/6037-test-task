import { Typography } from "@/components/ui/typography";

const Header = () => {
  return (
    <header className="container fixed inset-x-0 top-0 z-20 flex w-full items-center justify-center border-b border-white/40 bg-black/20 backdrop-blur-[68px]">
      <div className="flex h-14 w-full max-w-[90%] items-center md:h-20">
        <Typography size="lg" color="white" className="font-medium">
          6037 Venture Partnership
        </Typography>
      </div>
    </header>
  );
};

export default Header;
