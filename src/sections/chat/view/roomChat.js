import { Icon } from '@iconify/react'
import React from 'react'

export default function RoomChat() {
  return (
    <div className='flex flex-col w-4/5 bg-white rounded-lg gap-6 lg:h-96 md:h-96 h-48' style={{padding:"24px",boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
        <p className='lg:text-3xl md:text-3xl text-xl font-bold' style={{color:"#4F5665"}}>Room Chat</p>
        <div className='flex flex-col gap-3 items-center w-full' style={{height:"100%"}}>
            <div className='relative'>
                <div className='w-14 h-14 rounded-2xl bg-primary flex items-center justify-center animated-bounce' style={{boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
                    <Icon icon={"ci:chat"} className='w-8 h-8 text-white'/>
                </div>
            </div>
            <p className='text-center text-3xl font-semibold'>Wellcome to chats</p>
            <p className='text-sm text-center' style={{color:"#4F5665"}}>
                You have no conversation, start chat someone ! Have a good day!
            </p>
        </div>
    </div>
  )
}
