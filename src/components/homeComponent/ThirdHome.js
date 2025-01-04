import React from 'react';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import { DisplayedProducts } from '@/_mock';
import Button from '../Button';


export default function ThirdHome() {
    const display = DisplayedProducts;
  return (
    <div className='flex justify-center items-center flex-col mb-32'>
        <div className='mb-28'>
            <p className='font-bold text-2xl flex justify-center items-center m-2'>Here is People’s Favorite</p>
            <p className='font-light text-sm m-2'>Let’s choose and have a bit taste of poeple’s favorite. It might be yours too!</p>
        </div>
        <div className='flex lg:flex-row lg:gap-10 flex-col gap-20'>
            {
                display.map((v,i)=>{
                    return(
                        <div className='relative flex items-center flex-col border border-slate-300 md:w-80 rounded-md w-80' key={i}>
                            <div className='w-40 h-40 absolute -top-10'>
                                <Image src={v.image} alt='image'  
                                style={{ width: '100%', height:'100%', objectFit: "contain" }}
                                />
                            </div>  
                            <p className='font-bold mt-20 mb-8'>{v.nama}</p>
                            <div className='flex gap-6 flex-col'>
                            {
                                v.isi.map((v,i)=>{
                                    return(
                                        <div className='flex gap-2 items-center' key={i}>
                                            <Icon icon={v.icon} className='text-check text-xl'/>
                                            <p className='text-sm font-light'>{v.deskripsi}</p>
                                        </div>
                                    )

                                })
                            }
                            <div className='flex items-center justify-center flex-col'>
                                <p className='font-semibold text-lg m-5'>{v.harga}</p>
                                <Button type={"first"} color={"second yellow"} label={"Select"}/>
                            </div>
                            </div>             
                        </div>
                    )
                })
            }

        </div>
    </div>
  )
}
