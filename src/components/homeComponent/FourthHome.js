import Image from 'next/image';
import React from 'react';
import img from '@/../public/images/Huge Global.png';
import img2 from '@/../public/images/Sponsored.png';

export default function FourthHome() {
  return (
    <div className='flex justify-center items-center flex-col'>
        <div className='flex justify-center items-center flex-col'>
            <p className='font-semibold text-2xl text-center m-2 w-72'>Visit Our Store in the Spot on the Map Below</p>
            <p className='font-light text-sm w-10/12 flex text-center m-10'>See our store in every city on the spot and spen your good day there. See you soon!</p>
        </div>
        <div className='w-4/5 m-20 mt-32'>
            <Image src={img} alt='image'  
            style={{ width: '100%', height:'100%', objectFit: "contain" }}
            />
        </div>
        <div className='m-10'>
            <p className='font-semibold text-2xl flex justify-center items-center m-2'>Our Partner</p>
            <Image src={img2} alt='image'  
            style={{ width: '100%', height:'100%', objectFit: "contain" }}
            />
        </div>
    </div>
  )
}
