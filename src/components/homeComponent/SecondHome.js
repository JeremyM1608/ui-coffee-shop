
import { Icon } from '@iconify/react'
import Image from 'next/image'
import React, { useState } from 'react'
import img from '@/../public/images/35744 1.png'
import { PageDesc, Summary } from '@/_mock'


export default function SecondHome() {
    const [summary, setSummary] = useState(Summary)
  return (
    <div className='relative flex justify-center items-center w-full'>
        <div  className='absolute md:-top-12  top-12 flex bg-white rounded-xl md:w-9/12 md:h-2/6 w-11/12 h-1/6 shadow-md justify-around flex-row md:p-16 p-8'>
        {
            summary.map((v,i)=>{
                return(
                    <div className='flex gap-4 items-center' key={i}>
                        <div className="flex justify-center items-center bg-secondary md:w-14 md:h-14 w-10 h-10 shadow-md rounded-full">
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
        <div className='flex mt-60 mb-32 md:justify-evenly md:gap-64 md:flex-row flex-col'>
            <div className='w-80 h-64'>
                <Image src={img} alt='image'  
                style={{ width: '100%', height:'100%', objectFit: "cover" }}
                />
            </div>
            <div className='flex flex-col w-72 h-64 md:mt-0 mt-10 '>
                <p className="font-bold text-2xl">We Provide Good Coffee and Healthy Meals</p>
                <p className='font-light text-sm'>You can explore the menu that we provide with fun and have their own taste and make your day better.</p>
                {
                    PageDesc.map((v,i)=>{ 
                        return(
                        <div className='flex gap-5 items-center mt-2' key={i}>
                            <Icon icon="icon-park-solid:check-one" className='text-check'/>
                            <p className='text-sm font-light'>{v.desc}</p>
                        </div>
                        )
                    })
                }

            </div>
        </div>
    </div>
  )
}
