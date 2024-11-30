"use client"

import { chatDetails } from '@/_mock'
import useMediaQuery from '@/utils/use-media-query'
import { Icon } from '@iconify/react'
import React, { useState } from 'react'

const chatDetail = chatDetails

export default function RoomDetailChat({selectedMassage,setSelectedMassage}) {
    const isBreakPoint = useMediaQuery(768);

  return (
    isBreakPoint === true?
    (selectedMassage&&(
    <div className='flex flex-col lg:w-4/5 md:w-4/5 w-full rounded-lg gap-6 lg:h-96 md:h-96 h-48' style={{padding:"24px", boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px", backgroundColor:"#DFDFDF"}}>
        <div className='flex flex-row gap-3 items-center lg:text-3xl md:text-3xl text-xl font-bold' style={{color:"#4F5665"}}>
            {isBreakPoint&&(
            <button onClick={()=>setSelectedMassage(false)}>
                <Icon icon={"iconamoon:arrow-left-2-bold"}/>
            </button>)}
            <p>Name</p>
        </div>     
        <div className='flex relative flex-col gap-3 w-full' style={{height:"100%", paddingBottom:isBreakPoint ? "16px":"0px"}}>
            <div style={{ display:"flex", flexDirection:"column-reverse", width:"100%", height:isBreakPoint?"225px":"800px", overflowY:"auto",backgroundColor:"#FAFAFA", paddingBottom:"12px"}}>
                <div className='flex flex-col gap-3' style={{alignSelf: "end", minHeight:'100%', justifyContent:"flex-end",width:"100%"}}>
                    {
                    chatDetail.map((v,i)=>(
                                <div className="flex flex-col rounded-xl" style={{alignSelf:v.sender==="me"?"flex-end":"flex-start",padding:"10px",minWidth:"100px",maxWidth:"400px",backgroundColor:v.sender!=="me"?"#0b6da3":"#DCDCDC", color:v.sender!=="me"?"white":"black"}} key={i}>
                                    {v.sender !=="me"&&(<p className='text-sm font-bold'>{v.sender}</p>)}
                                    <p className='text-sm font-normal'>{v.massage}</p>
                                    <div className='flex items-center gap-3' style={{alignSelf:v.sender!=="me"?"flex-end":"flex-start"}}>
                                        {v.sender==="me"&&(<Icon icon="mdi:check-all" className='text-base' style={v.is_read === true ?{color:"#109CE9"}:{color:"#4F5665"}}/>)}
                                        <p className='text-xs font-light'>{v.created_at}</p>
                                    </div>
                                </div>
                        ))
                    }
                </div>
            </div>
          
            <div className='absolute' style={{width:"100%", bottom:"0px" }}>
                <label className="relative mt-6">
                    <span className="absolute inset-y-0 left-0 flex items-center text-slate-400 pl-4 cursor-pointer">
                    <Icon icon={"typcn:camera"} />
                    </span>
                    <input
                    className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-3xl py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                    placeholder="Type a massage"
                    type="text"
                    name="massage"
                    />
                    <span className="absolute inset-y-0 flex items-center text-blue cursor-pointer active:" style={{paddingRight:"1rem",right:"0px",color:"#109CE9"}}>
                    <Icon icon={"fluent:send-48-filled"} />
                    </span>
                </label>
            </div>
        </div>
    </div>
    ))
    :
    (<div className='flex flex-col lg:w-4/5 md:w-4/5 w-full rounded-lg gap-6 lg:h-96 md:h-96 h-48' style={{padding:"24px", boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px", backgroundColor:"#DFDFDF"}}>
        <div className='flex flex-row gap-3 items-center lg:text-3xl md:text-3xl text-xl font-bold' style={{color:"#4F5665"}}>
            {isBreakPoint&&(
            <button onClick={()=>setSelectedMassage(false)}>
                <Icon icon={"iconamoon:arrow-left-2-bold"}/>
            </button>)}
            <p>Name</p>
        </div>     
        <div className='flex relative flex-col gap-3 w-full' style={{height:"100%", paddingBottom:isBreakPoint ? "16px":"0px"}}>
            <div style={{ display:"flex", flexDirection:"column-reverse", width:"100%", height:isBreakPoint?"225px":"800px", overflowY:"auto",backgroundColor:"#FAFAFA", paddingBottom:"12px"}}>
                <div className='flex flex-col gap-3' style={{alignSelf: "end", minHeight:'100%', justifyContent:"flex-end",width:"100%"}}>
                    {
                    chatDetail.map((v,i)=>(
                                <div className="flex flex-col rounded-xl" style={{alignSelf:v.sender==="me"?"flex-end":"flex-start",padding:"10px",minWidth:"100px",maxWidth:"400px",backgroundColor:v.sender!=="me"?"#0b6da3":"#DCDCDC", color:v.sender!=="me"?"white":"black"}} key={i}>
                                    {v.sender !=="me"&&(<p className='text-sm font-bold'>{v.sender}</p>)}
                                    <p className='text-sm font-normal'>{v.massage}</p>
                                    <div className='flex items-center gap-3' style={{alignSelf:v.sender!=="me"?"flex-end":"flex-start"}}>
                                        {v.sender==="me"&&(<Icon icon="mdi:check-all" className='text-base' style={v.is_read === true ?{color:"#109CE9"}:{color:"#4F5665"}}/>)}
                                        <p className='text-xs font-light'>{v.created_at}</p>
                                    </div>
                                </div>
                        ))
                    }
                </div>
            </div>
          
            <div className='absolute' style={{width:"100%", bottom:"0px" }}>
                <label className="relative mt-6">
                    <span className="absolute inset-y-0 left-0 flex items-center text-slate-400 pl-4 cursor-pointer">
                    <Icon icon={"typcn:camera"} />
                    </span>
                    <input
                    className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-3xl py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                    placeholder="Type a massage"
                    type="text"
                    name="massage"
                    />
                    <span className="absolute inset-y-0 flex items-center text-blue cursor-pointer active:" style={{paddingRight:"1rem",right:"0px",color:"#109CE9"}}>
                    <Icon icon={"fluent:send-48-filled"} />
                    </span>
                </label>
            </div>
        </div>
    </div>)
  )
}
