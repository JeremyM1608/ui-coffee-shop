"use client"

import Image from 'next/image'
import img from '@/../public/images/chatbg.png'
import React, { useState } from 'react'
import ListChat from './view/listChat'
import RoomDetailChat from './view/roomDetailChat'
import useMediaQuery from '@/utils/use-media-query'

export default function Chat() {
  const isBreakPoint = useMediaQuery(768);
  const [selectedMassage, setSelectedMassage] = useState(false);


  return (
    <div className='w-full relative' style={{height:"fit-content"}}>
        <Image src={img} alt='image'  
         style={{ width: '100%', height:'100%', objectFit: "cover" }}
        />
        {isBreakPoint === true ?
        (<div className='flex flex-row' style={{position:"absolute", width:"100%", height:"100%" , top:"0", padding:isBreakPoint!== true ?"60px 100px 60px 100px":"10px"}}>
          {selectedMassage === false ?
            (<ListChat selectedMassage={selectedMassage} setSelectedMassage={setSelectedMassage}/>)
            :
            (<RoomDetailChat selectedMassage={selectedMassage} setSelectedMassage={setSelectedMassage} />)
          }
        </div>)
        :
        (<div className='flex flex-row' style={{position:"absolute", width:"100%", height:"100%" , top:"0", padding:isBreakPoint!== true ?"60px 100px 60px 100px":"10px"}}>
          <ListChat selectedMassage={selectedMassage} setSelectedMassage={setSelectedMassage}/>
          <RoomDetailChat selectedMassage={selectedMassage} setSelectedMassage={setSelectedMassage} />
      </div>)
        }
    </div>
  )
}
