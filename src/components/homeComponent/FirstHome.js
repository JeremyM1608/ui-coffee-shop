import React from 'react'
import Image from 'next/image'
import img from '@/../public/images/nathan-dumlao-71u2fOofI-U-unsplash 2.png'

export default function FirstHome() {
  return (
    <div className='relative' style={{ width: "100%", height:'fit-content'}}>
        <Image src={img} alt='image'
          priority
         style={{ width: '100%', height:'100%', objectFit: "cover" }}
        />
        <div className='absolute md:w-96 md:top-20 md:left-20 w-60 top-10 left-10 '>
            <p className='text-white font-bold md:text-3xl text-base mb-4'>Start Your Day with Coffee and Good Meals</p>
            <p className='text-white font-bold md:text-l text-sm mb-5'>We provide high quality beans, good taste, and healthy meals made by love just for you. Start your day with us for a bigger smile!</p>
            <button className='flex justify-center items-center bg-secondary md:w-40 md:h-11 rounded-lg font-medium md:text-base w-28 h-8 text-sm hover:bg-secondaryHover active:bg-secondaryActive' style={{boxShadow:" rgba(17, 12, 46, 0.15) 0px 48px 100px 0px"}}>Get Started</button>
        </div>
    </div>
  )
}
