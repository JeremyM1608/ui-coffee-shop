"use client"

import { Icon } from '@iconify/react';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import NavRight from './NavRight';
import NavLogo from './NavLogo';
import NavUser from './NavUser';

export default function Nav() {
  const pathName = usePathname();
  const router = useRouter()
  useEffect(()=>{
        return console.log(pathName)
  },[pathName]);
  return (
    <div className="flex h-20 sticky top-0 z-10 justify-around items-center bg-white " style={{boxShadow:"rgba(17, 17, 26, 0.1) 0px 1px 0px"}}>
      <NavLogo/>
        <div className='flex gap-6 font-normal md:text-base text-grey-10 text-xs'>
            <div 
            className='cursor-pointer transition all delay-100 hover:text-primary hover:underline decoration-2 decoration-primary'
            onClick={()=>router.push("/")}
            >
              Home
            </div>
            <div 
            className='cursor-pointer transition all delay-100 hover:text-primary hover:underline decoration-2 decoration-primary'
            onClick={()=>router.push("/products")}
            >
              Product
            </div>
            <div className='cursor-pointer transition all delay-100 hover:text-primary hover:underline decoration-2 decoration-primary' onClick={()=>router.push("/your-cart")}>
              Your Cart
            </div>
            <div className='cursor-pointer transition all delay-100 hover:text-primary hover:underline decoration-2 decoration-primary' onClick={()=>router.push("/history")}>
              History
            </div>
        </div>
        {
          pathName !== "/"?
          <NavUser/>:
          <NavRight/>
        }

    </div>
  )
}
