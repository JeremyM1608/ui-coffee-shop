"use client"

import { Icon } from '@iconify/react'
import Image from 'next/image'
import React, { useState } from 'react'
import img1 from "@/../public/images/barista2.png"
import { ChatList } from '@/_mock'

export default function ListChat() {
    const [chatList, setChatList] = useState(ChatList)
  return (
    <div className='flex flex-col w-1/3 items-center bg-primary rounded-lg gap-6 lg:h-96 md:h-96 h-48' style={{boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px", borderRight:"1px solid var(--primary)", overflow:"auto"}}>
      <label className="relative lg:!block hidden mt-6">
        <span className="sr-only">Search</span>
        <span className="absolute inset-y-0 left-0 flex items-center text-slate-400 pl-4">
          <Icon icon={"mingcute:search-line"} />
        </span>
        <input
          className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-3xl py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder="Search Chat"
          type="text"
          name="search"
        />
      </label>
      <div className='text-sm text-white font-medium text-center lg:mt-0 md:mt-0 mt-2'>
        Tap a chat to see a message
      </div>
      <div className='flex flex-col gap-3 lg:m-6 md:m-6 m-2'>
        {
          chatList.length === 0
          ?
          (<div className='text-center text-sm text-white font-medium'>you dont have any friend, you can add some friend!</div>)
          :
            chatList.map((v,i)=>{
            return(
            <div className='flex lg:flex-row md:flex-row flex-col justify-around gap-3' style={{paddingBottom:"16px",borderBottom:"2px solid white"}} key={i}>
                <Image src={v.img} alt='image' 
                style={{width:"60px",height:"60px",borderRadius:"100%", objectFit: "cover" }}/>
                <div className='flex flex-col gap-3'>
                    <p className='text-base font-semibold text-white'>{v.name}</p>
                    <p className='md:!block lg:!block hidden text-sm font-normal text-white'>{v.status}</p>
                </div>
            </div>)
            })
        }
      </div>
    </div>
  )
}
