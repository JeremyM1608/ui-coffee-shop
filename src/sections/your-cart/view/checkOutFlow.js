"use client"

import { Icon } from '@iconify/react'
import React, { useState } from 'react'

export default function CheckOutFlow() {
    const [isChecked,setIsChecked] = useState(true)
  return (
    <div className='flex flex-row w-full h-1/5 items-center justify-center gap-3'>
        <div className='flex flex-col items-center justify-center'>
            <div name="order" className='flex justify-center items-center bg-white shadow-lg' 
            style={{width:"50px",height:"50px", borderRadius:"100%"}}
            >
                {isChecked === true ?
                <Icon icon="icon-park-solid:check-one" className='text-check text-3xl'/>
                :
                <div style={{width: "30px", height:"30px", background:"var(--primary)", borderRadius:"100%"}}/>
                }
            </div>
            <label htmlFor="order" className='text-lg font-light text-white'>Order</label>
        </div>
        <div style={{border:"1px solid white",width:"100px", height:"1px"}}></div>
        <div className='flex flex-col items-center justify-center'>
            <div name="order" className='flex justify-center items-center bg-white shadow-lg'
            style={{width:"50px",height:"50px", borderRadius:"100%"}}
            >
                {isChecked === true ?
                <Icon icon="icon-park-solid:check-one" className='text-check text-3xl'/>
                :
                <div style={{width: "30px", height:"30px", background:"var(--primary)", borderRadius:"100%"}}/>
                }
            </div>
            <label htmlFor="order" className='text-lg font-light text-white'>Check out</label>
        </div>
        <div style={{border:"1px solid white",width:"100px", height:"1px"}}></div>
        <div className='flex flex-col items-center justify-center'>
            <div name="order" className='flex justify-center items-center bg-white shadow-lg' 
            style={{width:"50px",height:"50px", borderRadius:"100%"}}
            >
                {isChecked !== true ?
                <Icon icon="icon-park-solid:check-one" className='text-check text-3xl'/>
                :
                <div style={{width: "24px", height:"24px", background:"var(--primary)", borderRadius:"100%"}}/>
                }
            </div>
            <label htmlFor="order" className='text-lg font-light text-white'>Payment</label>
        </div>
        </div>
  )
}
