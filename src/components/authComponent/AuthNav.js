"use client"

import { Icon } from "@iconify/react";
import React from "react";
import NavLogo from "../nav/NavLogo";
import { useRouter } from "next/navigation";

export default function AuthNav({logo,pathName}) {
  const router = useRouter();
  return (
    <div className={`${pathName === "/forgot-password" ? "flex items-center justify-center w-full p-10" : "flex justify-between w-full p-10"} cursor-pointer`} onClick={()=>router.replace("/")}>
      <div className="flex gap-4 ">
        <NavLogo/>
      </div>
      <p className={pathName === "/forgot-password"? "hidden" : "font-semibold text-2xl text-primary"}>
        {logo}
      </p>
    </div>
  );
}
