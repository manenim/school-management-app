import { CircleUser, PersonStanding } from "lucide-react";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="w-full h-screen bg-red-800 pt-4 pr-8">
      <Link href="/dashboard">
        <div className="logo font-bolder text-3xl pl-8">
          <h3 className="font-bold">ADMIN</h3>
        </div>
      </Link>
      <div className="mt-[6rem] text-white text-bold text-2xl">
        <Link href="/dashboard/teachers">
          <div className="flex items-center mb-12 bg-black pl-8 py-5 rounded-tr-3xl rounded-br-3xl">
            <div className="icon mr-2">
              <CircleUser size={45} />
            </div>
            <p>Teachers</p>
          </div>
        </Link>
        <Link href="/dashboard/students">
          <div className="flex items-center cursor-pointer bg-black pl-8 py-5 rounded-tr-3xl rounded-br-3xl">
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
