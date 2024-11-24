import { Icon } from "@iconify/react";
import Image from "next/image";
import image from "@/../public/images/customerImage/userpp.png";
import React from "react";

const pp = image;

export default function NavUser() {
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
      <div className="text-center text-2xl text-slate-400 mt-2 cursor-pointer relative">
        <div className="rounded-full absolute bg-primary text-xs text-white font-medium animated-ping" style={{width:"17px",height:"17px", top:"-7px", left:"-7px"}}/>
        <div className="rounded-full absolute bg-primary text-xs text-white font-medium" style={{width:"17px",height:"17px", top:"-7px", left:"-7px"}}>
            2
        </div>
        <Icon icon="line-md:chat"/>
      </div>
      <Image 
        src={pp} alt='image'  
        style={{ width: '40px', height:'40px', objectFit: "contain", borderRadius:"100%", cursor: "pointer"}}
        />
    </div>
  );
}
