"use client"

import Image from 'next/image';
import React from 'react';
import img from '@/../public/images/barista.png';
import Chart from 'react-apexcharts';

export default function Goals() {
  return (
    <div className='flex flex-col h-full w-1/5 gap-3'>
        <div className='flex flex-col w-full h-full rounded-lg' style={{padding:"24px", boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
            <div className="flex justify-around gap-3 items-center mb-4" style={{borderBottom:"1px solid #D6D9DC"}}>
                <Image
                src={img}
                alt="image"
                style={{
                    width: "50px",
                    backgroundColor:"#DCDCDC",
                    objectFit: "contain",
                    borderRadius: "100%",
                }}
                />
                <div className='flex flex-col gap-1' style={{paddingBottom:"10px"}}>
                    <p className='text-base font-semibold'>Cheryn Laurent</p>
                    <p className='text-xs font-light'>Keep up the good work and spread love!</p>
                </div>
            </div>
            <div className='flex flex-col gap-3 items-center justify-center'>
                <p className='font-bold text-base'>Best Staff of the Month</p>
                <Chart 
                type="donut"
                height={280}
                width= "70%"
                series={[80,20]}
                options={{
                    noData:{text:"Empty Data"},
                    labels:["x","y"],
                }}
                />
                <div className='text-xs font-light flex flex-col justify-center items-center'>
                    <p>Achieved 3.5M of total 5M</p>
                    <p>478 Customer</p>
                </div>

            </div>
        </div>
        <div className='flex flex-col lg:w-full w-full h-full rounded-lg' style={{padding:"24px", boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
            <div className="flex flex-col justify-center items-center">
                <p className="font-bold text-base">Goals</p>
                <p className='text-xs font-light text-center'>Your goals is still on 76%. Keep up the good work!</p>
                <Chart 
                type="donut"
                height={280}
                width= "70%"
                series={[76,24]}
                options={{
                    noData:{text:"Empty Data"},
                    labels:["x","y"]
                }}
                />
            </div>
        </div>
    </div>
  )
}
