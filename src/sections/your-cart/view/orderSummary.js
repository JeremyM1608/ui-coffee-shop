import Image from 'next/image'
import img1 from '@/../public/images/customerImage/hazelnut2.png';
import img2 from '@/../public/images/customerImage/chickenwings.png';
import React from 'react'

export default function OrderSummary() {
  return (
    <div className="flex flex-col lg:w-1/2 md:w-1/2 w-full gap-6" style={{padding:"24px"}}>
        <div className='flex flex-col w-full rounded-lg bg-white' style={{padding:"34px",boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
            <div className='flex justify-center items-center text-3xl text-primary font-semibold' style={{ marginBottom:"75px"}}>Order Summary</div>
            <div className='flex flex-col gap-3' style={{borderBottom:"1px solid #DCDCDC"}} >
                <div className='flex justify-around items-center' style={{paddingBottom:"10px"}}>
                    <Image src={img1} alt='image' 
                    style={{ width: '82px', height:'90px', objectFit: "contain" }}/>
                    <div className=' flex flex-col text-sm font-normal'>
                        <p>Hazelnut Latte</p>
                        <p>x 1</p>
                        <p>Regular</p>
                    </div>
                    <div className='text-sm font-normal'>IDR 24.000</div>
                </div>
                <div className='flex justify-around items-center'  style={{paddingBottom:"10px"}}>
                    <Image src={img2} alt='image' 
                    style={{ width: '82px', height:'90px', objectFit: "contain" }}/>
                    <div className=' flex flex-col text-sm font-normal'>
                        <p>Chicken Fire Wings</p>
                        <p>x 2</p>
                    </div>
                    <div className='text-sm font-normal'>IDR 30.000</div>
                </div>
            </div>
            <div className='flex flex-col gap-2' style={{padding:"12px"}}>
                <div className='flex justify-between text-sm font-normal'>
                    <p>SUBTOTAL</p>
                    <p>RP 120.000</p>
                </div>
                <div className='flex justify-between text-sm font-normal'>
                    <p>TAX & FEES</p>
                    <p>RP 20.000</p>
                </div>
                <div className='flex justify-between text-sm font-normal'>
                    <p>SHIPPING</p>
                    <p>RP 10.000</p>
                </div>
            </div>
            <div className='flex justify-between text-xl text-primary font-bold' style={{padding:"12px",marginTop:"6px"}}>
                <p>TOTAL</p>
                <p>IDR 150.000</p>
            </div>
        </div>
    </div>
  )
}
