"use client"

import Image from 'next/image'
import img1 from '@/../public/images/customerImage/hazelnut2.png';
import img2 from '@/../public/images/customerImage/chickenwings.png';
import React, { useState } from 'react'
import Button from '@/components/Button';
import { Orders } from '@/_mock';
import useMediaQuery from '@/utils/use-media-query';

export default function CustomerOrder() {
    const [curr,setCurr] = useState(0) 

    const handleNext = ()=>{
        setCurr((curr)=>(curr === orders.length - 1 ? 0: curr+1))
    }

    const orders = Orders;
    const md =useMediaQuery(768);
    const sm = useMediaQuery(640);
  return (
    <div className="flex flex-col lg:w-1/2 md:w-1/2 w-full gap-6" style={{padding:"24px"}}>
        <div className='flex flex-row' style={{overflow:"hidden"}}>
            {
                orders.map((v,i)=>{
                    let subTotal = 0;
                    let tax = 0.12;
                    let shipping = 10000;
                    return(
                <div className='flex flex-col rounded-lg bg-white' style={{minWidth:"100%", padding:"34px",boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px",transform:`translateX(-${curr * 100}%)`,transition:"transform 0.5s ease-out"}} key={i}>
                    <div className='flex justify-center items-center text-primary font-semibold' style={{fontSize:md?"20px":"25px"}}>{v.client_delivery_method} for {v.client_name}</div>
                    <div className='flex justify-center items-center lg:text-base md:text-sm text-xs text-primary font-normal' style={{ marginBottom:md?"0px":"75px",fontSize:md?"14px":"16px"}}>{v.client_table?`Table ${v.client_table}`:v.client_address?`To ${v.client_address}`:""}</div>
                    <div className='flex flex-col gap-3' style={{borderBottom:"1px solid #DCDCDC"}} >
                        {
                            v.client_order.map((v,i)=>{
                               subTotal+=v.order_price*v.order_qty;
                                return(
                            <div className='flex justify-around items-center' style={{paddingBottom:"10px"}} key={i+1}>
                                <Image src={v.order_img} alt='image' 
                                style={{ width:md?"82px":'62px', height:md?'90px':"70px", objectFit: "contain" }}/>
                                <div className=' flex flex-col font-normal' style={{fontSize:md?"12x":"14px"}}>
                                    <p>{v.order_name}</p>
                                    <p>x{v.order_qty}</p>
                                    {v.order_size&&(<p>{v.order_size}</p>)}
                                </div>
                                <div className=' font-normal' style={{fontSize:md?"12x":"14px"}}>Rp. {new Intl.NumberFormat().format(v.order_price)}</div>
                            </div>
                            )})
                        }
                    </div>
                    <div className='flex flex-col gap-2' style={{padding:"12px"}}>
                        <div className='flex justify-between font-normal' style={{fontSize:md?"12x":"14px"}}>
                            <p>SUBTOTAL</p>
                            <p>RP {new Intl.NumberFormat().format(subTotal)}</p>
                        </div>
                        <div className='flex justify-between font-normal' style={{fontSize:md?"12x":"14px"}}>
                            <p>TAX & FEES</p>
                            <p>RP {new Intl.NumberFormat().format(subTotal*tax)}</p>
                        </div>
                        <div className='flex justify-between font-normal' style={{fontSize:md?"12x":"14px"}}>
                            <p>SHIPPING</p>
                            <p>RP {new Intl.NumberFormat().format(shipping)}</p>
                        </div>
                    </div>
                    <div className='flex justify-between lg:text-xl text-base text-primary font-bold' style={{padding:"12px",marginTop:"6px"}}>
                        <p>TOTAL</p>
                        <p>IDR {new Intl.NumberFormat().format(subTotal+(subTotal*tax) + shipping)}</p>
                    </div>
            </div>
                )
            })
            }
        </div>
        
        <div className='flex justify-center items-center'>
        <Button 
          type={"second"}
          color={"yellow"}
          label={"Slide to see upcoming orders"}
          sx={{width:"100%"}}
          icon={"bxs:right-arrow"}
          onClick={()=>handleNext()}
        />
      </div>
    </div>
  )
}
