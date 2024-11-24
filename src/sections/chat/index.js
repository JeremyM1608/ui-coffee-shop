import Image from 'next/image'
import img from '@/../public/images/chatbg.png'
import React from 'react'
import ListChat from './view/listChat'
import RoomChat from './view/roomChat'

export default function Chat() {
  return (
    <div className='w-full relative' style={{height:"fit-content"}}>
        <Image src={img} alt='image'  
         style={{ width: '100%', height:'100%', objectFit: "cover" }}
        />
        <div className='flex flex-row' style={{position:"absolute", width:"100%", height:"100%" , top:"0", padding:"60px 100px 60px 100px"}}>
            <ListChat />
            <RoomChat />
        </div>
    </div>
  )
}
