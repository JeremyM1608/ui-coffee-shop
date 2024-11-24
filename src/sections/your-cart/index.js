import Image from 'next/image'
import img from "@/../public/images/customerImage/bg-img.png"
import React from 'react'
import CheckOutFlow from './view/checkOutFlow'
import OrderSummary from './view/orderSummary'
import PaymentOrder from './view/paymentOrder'

export default function YourCart() {
  return (
    <div className='w-full relative' style={{height:"fit-content"}}>
        <Image src={img} alt='image'  
         style={{ width: '100%', height:'100%', objectFit: "cover" }}
        />
        <div style={{position:"absolute", width:"100%", height:"100%" , top:"0", padding:"30px"}}>
            <CheckOutFlow/>
            <div className='text-3xl font-semibold text-white w-2/3' style={{textShadow: "4px 4px 2px rgba(0,0,0,0.6)"}}>Checkout your item now!</div>
            <div className='flex lg:flex-row md:flex-row flex-col' style={{width:"100%",height:"80%", overflow:"auto"}}>
                <OrderSummary />
                <PaymentOrder/>
            </div>
        </div>
    </div>
  )
}
