
import { Icon } from '@iconify/react'
import Image from 'next/image'
import React, { useState } from 'react'
import img from '@/../public/images/35744 1.png'
import { PageDesc, Summary } from '@/_mock'


export default function SecondHome() {
    const [summary, setSummary] = useState(Summary)
  return (
    <div className='relative flex justify-center items-center w-full'>
        <div  className='absolute lg:-top-12  top-12 flex bg-white rounded-xl lg:w-9/12 lg:h-2/6 w-11/12 h-1/6 shadow-md justify-around flex-row lg:p-16 p-8'>
        {
            summary.map((v,i)=>{
                return(
                    <div className='flex gap-4 items-center' key={i}>
                        <div className="flex justify-center items-center bg-secondary lg:w-14 lg:h-14 w-10 h-10 shadow-md rounded-full">
                            <Icon icon={v.icon} className='text-primary text-xl'/>
                        </div>
                        <div>
                            <p className='font-extrabold md:text-base text-sm'>{v.number}</p>
                            <p className='font-light md:text-sm text-xs'>{v.deskripsi}</p>
                        </div>
                    </div>
                )
            })
        }
        </div>
        <div className='flex mt-60 mb-32 lg:justify-evenly lg:gap-64 lg:flex-row flex-col'>
            <div className='w-80 h-64'>
                <Image src={img} alt='image'  
                style={{ width: '100%', height:'100%', objectFit: "cover" }}
                />
            </div>
            <div className='flex flex-col w-72 h-auto md:mt-0 mt-10'>
                <p className="font-bold text-2xl">We Provide Good Coffee and Healthy Meals</p>
                <p className='font-light text-sm'>You can explore the menu that we provide with fun and have their own taste and make your day better.</p>
                {
                  PageDesc.map((v, i) => { 
                    return (
                      <div className='flex gap-5 items-center mt-2' key={i}>
                        <Icon 
                          icon="icon-park-solid:check-one" 
                          style={{ fontSize: '24px', color:"#2FAB73" }}
                        />
                        <p className='text-sm font-light'>{v.desc}</p>
                      </div>
                    );
                  })
                }
            </div>
        </div>
    </div>
  )
}
