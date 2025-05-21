import React from "react";
import { NavMenu } from "./Shared/NavMenu";
import { LogsIcon } from "lucide-react";
import Link from "next/link";
import { DarkTogle } from "./Shared/DarkTogle";

export const Header = () => {
  return (
    <div className="text-text mt-6 items- max-w-[1280px] mx-auto grid grid-cols-6 md:grid-cols-12">
      <div className=" border">
        <LogsIcon />
      </div>

      {/* DaRK TOGLE */}
      <div className="col-span-10 flex justify-end space-x-4 items-center">
        <NavMenu />
        <DarkTogle />
        <Link href={"/signin"}>SignIn</Link>
        <Link href={"/signup"}>SignUp</Link>
      </div>
    </div>
  );
};
