"use client"

import { Icon } from "@iconify/react";
import Image from "next/image";
import img from "@/../public/images/defaultUser.jpg";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import DropDown from "../DropDown/DropDown";
import { useRouter } from "next/navigation";

export default function NavUser() {
  const { user } = useSelector((state) => state.login);
  const [openDropdown, setOpenDropdown] = useState(false);
  const router = useRouter();

  return (
    <div className="flex flex-row md:gap-6 gap-3 ">
      <label className="relative lg:!block hidden ">
        <span className="sr-only">Search</span>
        <span className="absolute inset-y-0 left-0 flex items-center text-slate-400 pl-4">
          <Icon icon={"mingcute:search-line"} />
        </span>
        <input
          className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder="Search for anything..."
          type="text"
          name="search"
        />
      </label>
      <div className="text-center text-2xl text-slate-400 mt-2 cursor-pointer relative" onClick={()=>router.replace("/chat")}> 
        <div className="rounded-full absolute bg-primary text-xs text-white font-medium animated-ping" style={{width:"17px",height:"17px", top:"-7px", left:"-7px"}}/>
        <div className="rounded-full absolute bg-primary text-xs text-white font-medium" style={{width:"17px",height:"17px", top:"-7px", left:"-7px"}}>
            2
        </div>
        <Icon icon="line-md:chat"/>
      </div>
      <div className="relative" >
        <Image
          src={!user.url_photo ? img : `${process.env.NEXT_PUBLIC_BACKEND_URL}${user.url_photo}`} alt='image'
          width={40}
          height={40}
          style={{ width: '40px', height:'40px', objectFit: "contain", borderRadius:"100%", cursor: "pointer"}}
          onClick={()=> setOpenDropdown((prev)=> !prev)}
          />
          {
            openDropdown && <DropDown setOpenDropDown={setOpenDropdown}/>
          }
      </div>
    </div>
  );
}
