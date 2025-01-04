"use client"

import Image from 'next/image'
import img1 from '@/../public/images/defaultProduct.jpg';
import img2 from '@/../public/images/customerImage/chickenwings.png';
import React, { useState } from 'react'
import Button from '@/components/Button';
import useMediaQuery from '@/utils/use-media-query';
import { useSelector } from 'react-redux';

export default function CustomerOrder({transaction, curr, setCurr}) {
    const products = useSelector((state) => state.product.products);

    const handleNext = ()=>{
        setCurr((curr)=>(curr === transaction.length - 1 ? 0: curr+1))
    }

    const md =useMediaQuery(768);
    const sm = useMediaQuery(640);
  return (
    <div className="flex flex-col lg:w-1/2 md:w-1/2 w-full gap-6" style={{padding:"24px"}}>
        <div className='flex flex-row' style={{overflow:"hidden"}}>
            {   transaction.length > 0
                ?
                transaction?.map((v,i)=>{
                    let subTotal = 0;
                    let tax = 0.12;
                    (
                    <div className='flex flex-col rounded-lg bg-white' style={{minWidth:"100%", padding:"34px",boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px",overflowX:"auto",transform:`translateX(-${curr * 100}%)`,transition:"transform 0.5s ease-out"}} key={i}>
                        <div className='flex justify-center items-center text-primary font-semibold' style={{fontSize:md?"20px":"25px"}}>{v.delivery_method} for {v.customer_name}</div>
                        <div className='flex justify-center items-center lg:text-base md:text-sm text-xs text-primary font-normal' style={{ marginBottom:md?"0px":"75px",fontSize:md?"14px":"16px"}}>{v.client_table?`Table ${v.client_table}`:v.client_address?`To ${v.client_address}`:""}</div>
                        <div className='flex flex-col gap-3' style={{borderBottom:"1px solid #DCDCDC"}} >
                            {
                                v?.transaction_details?.map((v,i)=>{
                                    const product = products.find((prod)=> prod.product_id === v.id_product)
                                subTotal+=parseInt(v.product_price)*v.qty;
                                    return(
                                <div className='flex justify-around items-center' style={{paddingBottom:"10px"}} key={i+1}>
                                    <Image src={product?.product_url_photo?`${process.env.NEXT_PUBLIC_BACKEND_URL}${product.product_url_photo}` : img1} alt='image' 
                                    width={82}
                                    height={90}
                                    style={{ width:md?"82px":'62px', height:md?'90px':"70px", objectFit: "contain" }}/>
                                    <div className=' flex flex-col font-normal' style={{fontSize:md?"12x":"14px"}}>
                                        <p>{v.product_name}</p>
                                        <p>x{v.qty}</p>
                                        {v.id_size&&(<p>{v.id_size === 1 ? "Reguler":v.id_size === 2?"Large": "Extra Large"}</p>)}
                                    </div>
                                    <div className=' font-normal' style={{fontSize:md?"12x":"14px"}}>Rp. {parseInt(v.product_price).toLocaleString('id-ID')}</div>
                                </div>
                                )})
                            }
                        </div>
                        <div className='flex flex-col gap-2' style={{padding:"12px"}}>
                            <div className='flex justify-between font-normal' style={{fontSize:md?"12x":"14px"}}>
                                <p>SUBTOTAL</p>
                                <p>RP {parseInt(subTotal).toLocaleString('id-ID')}</p>
                            </div>
                            <div className='flex justify-between font-normal' style={{fontSize:md?"12x":"14px"}}>
                                <p>TAX & FEES</p>
                                <p>RP {parseInt(subTotal*tax).toLocaleString('id-ID')}</p>
                            </div>
                            {/* <div className='flex justify-between font-normal' style={{fontSize:md?"12x":"14px"}}>
                                <p>SHIPPING</p>
                                <p>RP {new Intl.NumberFormat().format(shipping)}</p>
                            </div> */}
                        </div>
                        <div className='flex justify-between lg:text-xl text-base text-primary font-bold' style={{padding:"12px",marginTop:"6px"}}>
                            <p>TOTAL</p>
                            <p>IDR {parseInt(subTotal+(subTotal*tax)).toLocaleString('id-ID')}</p>
                        </div>
                    </div>
                )
            })
            :(
                <div className='lg:text-3xl md:text-3xl text-xl font-semibold text-white w-2/3' style={{marginLeft:"18px",marginTop:"16px",textShadow: "4px 4px 2px rgba(0,0,0,0.6)"}}
                >
                    No orders yet
                </div>
            )
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
