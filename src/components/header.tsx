import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";


const Header = () => {
  return (
    <div className='800 shadow-lg'>
      <div className="w-full h-[9vh] px-16 flex justify-between items-center">
        <div className="logo">
          <p className="text-2xl font-bold">Dashboard</p>
        </div>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}

export default Header