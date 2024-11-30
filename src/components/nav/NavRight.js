"use client"

import { useRouter } from "next/navigation";
import React from "react";
import Button from "../Button";

export default function NavRight() {
    const router = useRouter();

    const loginClick = ()=>{
      router.replace('/login');
    };
  
    const signupClick = ()=>{
      router.replace('/signup');
    };
  return (
    <div className="flex md:gap-6 gap-3">
      <Button type={"first"} label="Login" onClick={loginClick}/>
      <Button type={"first"} color={"yellow"} label={"Sign up"} onClick={signupClick}/>
    </div>
  );
}
