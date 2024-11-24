import React from 'react'

export default function HistoryHeader() {
  return (
    <div className='flex flex-col justify-center items-center h-1/6 gap-3'>
        <p className='text-3xl font-bold text-white' style={{textShadow:"4px 4px 2px rgba(0,0,0,0.6)"}}>Let’s see what you have bought!</p>
        <p className='text-white text-sm font-normal'>Select item to delete</p>
    </div>
  )
}
