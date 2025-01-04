"use client"

import useMediaQuery from '@/utils/use-media-query';
import { Icon } from '@iconify/react'
import React, { useState } from 'react'

export default function OrderFlow() {
    const [isChecked,setIsChecked] = useState(true);
    const isBreakPoint = useMediaQuery(768);
  return (
    <div className='flex flex-row w-full h-1/5 items-center justify-center gap-3'>
        <div className='flex flex-col items-center justify-center'>
            <div id="order" name="order" className='flex justify-center items-center bg-white shadow-lg' 
            style={{width:isBreakPoint?"40px":"50px",height:isBreakPoint?"40px":"50px", borderRadius:"100%"}}
            >
                {isChecked === true ?
                <Icon icon="icon-park-solid:check-one" className='text-check lg:text-3xl md:text-3xl text-xl'/>
                :
                <div style={{width:isBreakPoint?"20px":"24px",height:isBreakPoint?"20px":"24px", background:"var(--primary)", borderRadius:"100%"}}/>
                }
            </div>
            <label htmlFor="order" className='lg:text-xl md:text-xl text-sm font-light text-white'>Order</label>
        </div>
        <div style={{border:"1px solid white",width:"100px", height:"1px"}}></div>
        <div className='flex flex-col items-center justify-center'>
            <div id='checkout' name="checkout" className='flex justify-center items-center bg-white shadow-lg'
            style={{width:isBreakPoint?"40px":"50px",height:isBreakPoint?"40px":"50px", borderRadius:"100%"}}
            >
                {isChecked === true ?
                <Icon icon="icon-park-solid:check-one" className='text-check lg:text-3xl md:text-3xl text-xl'/>
                :
                <div style={{width:isBreakPoint?"20px":"24px",height:isBreakPoint?"20px":"24px", background:"var(--primary)", borderRadius:"100%"}}/>
                }
            </div>
            <label htmlFor="checkout" className='lg:text-xl md:text-xl text-sm font-light text-white'>Check out</label>
        </div>
        <div style={{border:"1px solid white",width:"100px", height:"1px"}}></div>
        <div className='flex flex-col items-center justify-center'>
            <div id='finish_order' name="finish_order" className='flex justify-center items-center bg-white shadow-lg' 
            style={{width:isBreakPoint?"40px":"50px",height:isBreakPoint?"40px":"50px", borderRadius:"100%"}}
            >
                {isChecked !== true ?
                <Icon icon="icon-park-solid:check-one" className='text-check lg:text-3xl md:text-3xl text-xl'/>
                :
                <div style={{width:isBreakPoint?"20px":"24px", height:isBreakPoint?"20px":"24px", background:"var(--primary)", borderRadius:"100%"}}/>
                }
            </div>
            <label htmlFor="finish_order" className='lg:text-xl md:text-xl text-sm font-light text-white'>Finish order</label>
        </div>
        </div>
  )
}
