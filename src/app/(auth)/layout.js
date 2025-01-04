"use client"

import Image from 'next/image';
import React, { useEffect } from 'react';
import img1 from '@/../public/images/loginimg.png';
import AuthNav from '@/components/authComponent/AuthNav';
import AuthFooter from '@/components/authComponent/AuthFooter';
import { usePathname } from 'next/navigation';
import GuestGuard from '@/guards/GuestGuard';
const image1 = img1;

export default function Layout({ children }) {

      const pathName = usePathname();
      useEffect(()=>{
            return console.log(pathName)
      },[pathName]);

    return (
      <GuestGuard>
        <div className='flex flex-row'>
          <div className="hidden lg:!block"style={{ width: "50%", height:'100%'}}>
              <Image src={image1} alt='image'  
              style={{ width: '100%', height:'100%', objectFit: "cover" }}
              />
          </div>
          <div className='lg:w-1/2 w-full flex flex-col  relative'>
            <AuthNav logo={pathName === "/login"? "Login" : "Signup"} pathName={pathName}/>
            {children}
            <AuthFooter/>
          </div>
        </div>
      </GuestGuard>

    );
  }