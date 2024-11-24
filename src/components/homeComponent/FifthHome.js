"use client"

import { DataReview } from "@/_mock";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { useState } from "react";

export default function FifthHome() {
    const [review, setReview]= useState(DataReview);
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextReview = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % review.length);
    };

    const prevReview = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + review.length) % review.length);
    };
  return (
    <div className='relative flex justify-center items-center flex-col w-full'>
        <div className='flex items-center justify-center gap-8 flex-col'>
            <p className='font-semibold text-2xl text-center m-2 w-72'>Loved by Thousands of Happy Customer</p>
            <p className='font-light text-sm w-4/12 flex text-center'>These are the stories of our customers who have visited us with great pleasure.</p>
        </div> <div className='flex md:flex-row  flex-col items-center justify-center m-5 transition-transform duration-500' style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {/* Review Card */}
            {
                review.map((v,i)=>{
                    return <div className="p-5 md:w-3/12 h-3/12 border border-slate-300 rounded-md m-6" key={i}>
                        <div className='flex justify-between'>
                            <div className='flex gap-5 items-center '>
                                <div className='w-14 h-14'>
                                <Image src={v.image} alt='image'  
                                style={{ width: '100%', height:'100%', objectFit: "contain" }}
                                />
                                </div>
                                <div>
                                    <p className='font-medium text-sm mb-1'>{v.nama}</p>
                                    <p className='font-light text-xs'>{v.asal}</p>
                                </div>
                            </div>
                            <div className='flex gap-2'>
                                <p className='font-normal text-sm'>{v.rating}</p>
                                <Icon icon={v.icon} className='text-secondary text-xl'/>
                            </div>
                        </div>
                        <p className='font-normal text-sm mt-5'>{v.deskripsi}</p>
                    </div>
                })
            }
        </div>
        {/* Pagination Indicators */}     
        <div className="flex flex-row justify-between px-8 m-10 w-full mb-40">
            <div className="flex flex-row gap-3 items-center">
                {
                    review.map((_,i)=>(
                        <div
                        key={i}
                        className=
                        {i === currentIndex ? 
                        "w-12 h-5 bg-primary rounded-2xl" : 
                        "w-4 h-4 bg-slate-300 rounded-full"}
                        style={{transition:"all .2s"}}
                        >
                        </div>
                    ))
                }   
            </div>
            {/* Navigation Buttons */}
            <div className="flex gap-4">
                <button 
                className="rounded-full w-12 h-12 border border-primary bg-white hover:bg-primary flex justify-center items-center text-primary hover:text-white"
                onClick={prevReview}
                >
                    <Icon icon="line-md:arrow-small-left" className="text-3xl" />
                </button>
                <button 
                className="rounded-full w-12 h-12 border border-primary bg-white hover:bg-primary flex justify-center items-center text-primary hover:text-white"
                onClick={nextReview}
                >
                    <Icon icon="line-md:arrow-small-right" className="text-3xl" />
                </button>
            </div>
        </div>
        {/* Promo Section */}
        <div  className='md:absolute md:-bottom-20  flex bg-white rounded-xl md:w-9/12 md:h-1/4 w-11/12 h-1/6 shadow-md justify-between flex-row md:p-16 p-8 items-center'>
            <div>
                <p className='font-semibold text-2xl w-52'>Check our promo today!</p>
                <p className='font-light text-sm '>Lets see the deals and pick yours!</p>
            </div>
            <button className='flex justify-center items-center bg-secondary md:w-40 md:h-11 rounded-lg font-medium md:text-base w-28 h-8 text-sm hover:bg-secondaryHover active:bg-secondaryActive ' style={{boxShadow:" rgba(17, 12, 46, 0.15) 0px 48px 100px 0px"}}>
                See Promo
            </button>
        </div>
    </div>
  )
}
