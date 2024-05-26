import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

const Header = () => {
  return (
    <div className="shadow-lg bg-white z-[50]">
      <div className="w-full h-[9vh] px-16 flex justify-between items-center">
        <Link href="/">
          <div className="logo cursor-pointer">
            <p className="text-2xl font-bold">School Mgt.</p>
          </div>
        </Link>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default Header;
