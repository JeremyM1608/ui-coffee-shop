import Image from 'next/image'
import React from 'react'
import img from "@/../public/images/customerImage/bg-history-img.png"
import HistoryHeader from './view/history-header'
import HistoryItems from './view/history-items'

export default function History() {
  return (
    <div className='w-full relative' style={{height:"100%"}}>
        <Image src={img} alt='image'  
         style={{ width: '100%', height:'100%', objectFit: "cover" }}
        />
        <div style={{position:"absolute", width:"100%", height:"100%" , top:"0", padding:"30px"}}>
            <HistoryHeader />
            <HistoryItems />
        </div>
    </div>
  )
}
