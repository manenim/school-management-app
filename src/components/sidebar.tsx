"use client"

import { CircleUser, PersonStanding } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";


const Sidebar = () => {
    const pathname = usePathname();

  return (
    <div className="w-full h-screen pt-4 pr-8">
      <Link href="/dashboard">
        <div className="logo font-bolder text-3xl pl-8">
          <h3 className="font-bold text-white py-4">ADMIN</h3>
        </div>
      </Link>
      <div className="mt-[6rem] text-white text-bold text-xl">
        <Link href="/dashboard/teachers">
          <div
            className={`flex items-center mb-12 pl-8 py-3 rounded-tr-3xl rounded-br-3xl text-white ${
              pathname == "/dashboard/teachers" 
                ? "bg-[rgb(12,97,244)]"
                : "bg-[rgba(12,97,244,0.45)]"
            }`}>
            <div className="icon mr-2">
              <CircleUser size={45} />
            </div>
            <p>Teachers</p>
          </div>
        </Link>
        <Link href="/dashboard/students">
          <div className={`flex items-center cursor-pointer pl-8 py-3 rounded-tr-3xl rounded-br-3xl ${
              pathname == "/dashboard/students"
                ? "bg-[rgb(12,97,244)]"
                : "bg-[rgba(12,97,244,0.45)]"
            }`}>
            <div className="icon mr-2">
              <PersonStanding size={45} />
            </div>
            <p>Students</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
