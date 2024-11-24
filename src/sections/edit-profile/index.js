"use client"

import Image from 'next/image';
import img from '@/../public/images/editppbg.png'
import React from 'react';
import UserProfile from './view/user-profile';

export default function EditProfile() {
  return (
    <div className='w-full relative' style={{height:"fit-content"}}>
        <Image src={img} alt='image'  
         style={{ width: '100%', height:'100%', objectFit: "cover" }}
        />
        <div className='flex flex-col' style={{position:"absolute",gap:"24px", width:"100%", height:"100%" , top:"0", padding:"30px 80px 30px 80px"}}>
            <p className='font-bold lg:text-3xl md:text-3xl text-2xl text-white'>User Profile</p>
            <UserProfile/>
        </div>
    </div>
  )
}
