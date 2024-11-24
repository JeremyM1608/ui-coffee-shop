import { Icon } from '@iconify/react'
import React from 'react'

export default function Pagination() {
  return (
    <div className='flex flex-row gap-6 items-center'>
        <div className='flex flex-col gap-1 items-center'>
            <Icon icon={"fluent:filter-24-filled"} style={{ color:"black"}} className='text-xl'/>
            <p className='text-xs font-light'>Filter</p>
        </div>
        <div className='flex items-center justify-center'>
            <p className='lg:text-base md:text-base text-sm font-medium '>15 April - 21 April 2020</p>
        </div>
        <div className='flex flex-row justify-around gap-3'>
            <Icon icon={"ri:arrow-left-s-line"} className='active:text-black hover:text-greyHover cursor-pointer text-xl'/>
            <Icon icon={"ri:arrow-right-s-line"} className='active:text-black hover:text-greyHover cursor-pointer text-xl'/>
        </div>
    </div>
  )
}
