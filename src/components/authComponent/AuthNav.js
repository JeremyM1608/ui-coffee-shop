import { Icon } from "@iconify/react";
import React from "react";

export default function AuthNav({logo,pathName}) {
  return (
    <div className={pathName === "/auth/forgot-password" ? "flex items-center justify-center w-full p-10" : "flex justify-between w-full p-10"}>
      <div className="flex gap-4 ">
        <Icon
          className="text-primary text-2xl"
          icon="line-md:buy-me-a-coffee-filled"
          style={{ fontSize: "30px" }}
        />
        <p className=" font-extrabold lg:text-xl text-3xl">
          Coffee Shop
        </p>
      </div>
      
      <p className={pathName === "/auth/forgot-password"? "hidden" : "font-semibold text-2xl text-primary"}>
        {logo}
      </p>
    </div>
  );
}
