import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const HomeHeader = () => {
  return (
    <div className="bg-[#051632] shadow-lg">
      <div className="w-full h-[9vh] px-16 flex justify-between items-center">
        <div className="logo">
          <h2 className="text-2xl font-bold text-white">School Mgt.</h2>
        </div>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default HomeHeader;
