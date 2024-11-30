import Image from 'next/image'
import img from "@/../public/images/customerImage/bg-img.png"
import React from 'react'
import PaymentOrder from './view/paymentOrder'
import OrderFlow from './view/orderFlow'
import CustomerOrder from './view/customerOrder'

export default function Orders() {
  return (
    <div className='w-full relative' style={{height:"fit-content"}}>
        <Image src={img} alt='image'  
         style={{ width: '100%', height:'100%', objectFit: "cover" }}
        />
        <div style={{position:"absolute", width:"100%", height:"100%" , top:"0", padding:"30px"}}>
            <OrderFlow/>
            <div className='lg:text-3xl md:text-3xl text-xl font-semibold text-white w-2/3' style={{marginLeft:"18px",marginTop:"16px",textShadow: "4px 4px 2px rgba(0,0,0,0.6)"}}>Finish your customer order now.</div>
            <div className='flex lg:flex-row md:flex-row flex-col' style={{width:"100%",height:"80%", overflow:"auto"}}>
                <CustomerOrder />
                <PaymentOrder/>
            </div>
        </div>
    </div>
  )
}
