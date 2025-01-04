"use client"

import Image from 'next/image'
import img1 from '@/../public/images/customerImage/hazelnut2.png';
import React from 'react'

export default function OrderSummary({cart, products}) {
    const sizeMap = { 1: "Reguler", 2: "Large", 3: "Extra Large" };
    const subtotal = cart?.reduce((total, v) => {
        const product = products.find((prod) => prod.product_id === v.id_product);
        if (product) {
            const price = parseInt(product.product_price) * v.qty;
            return total + price;
        }
        return total;
    }, 0);
    const tax = 12;
    const shipping = 0;

  return (
    <div className="flex flex-col lg:w-1/2 md:w-1/2 w-full gap-6" style={{padding:"24px"}}>
        <div className='flex flex-col w-full rounded-lg bg-white' style={{padding:"34px",boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
            <div className='flex justify-center items-center lg:text-3xl md:text-3xl text-xl text-primary font-semibold' style={{ marginBottom:"75px"}}>Order Summary</div>
            <div className='flex flex-col gap-3' style={{borderBottom:"1px solid #DCDCDC"}} >
                {
                    cart?.length > 0
                    ?
                    cart.map((v)=>{
                        const product = products.find((prod)=> prod.product_id === v.id_product)
                        const size = sizeMap[v.id_size];
                        return(
                        <div className='flex justify-around items-center' style={{paddingBottom:"10px"}} key={v.id_product}>
                            <Image src={product.product_url_photo?`${process.env.NEXT_PUBLIC_BACKEND_URL}${product.product_url_photo}` : img1} alt='image' 
                            width={82}
                            height={90}
                            style={{ width: '82px', height:'90px', objectFit: "cover" }}/>
                            <div className=' flex flex-col text-sm font-normal'>
                                <p>{product.product_name}</p>
                                <p>x{v.qty}</p>
                                <p>{size}</p>
                            </div>
                            <div className='text-sm font-normal'>IDR {parseInt(product.product_price).toLocaleString('id-ID')}</div>
                        </div>
                        )
                    })
                    :
                    <div className='flex justify-center items-center lg:text-3xl md:text-3xl text-xl text-primary font-semibold' style={{ marginBottom:"75px"}}>Your cart is empty.</div>
                }
            </div>
            <div className='flex flex-col gap-2' style={{padding:"12px"}}>
                <div className='flex justify-between text-sm font-normal'>
                    <p>SUBTOTAL</p>
                    <p>RP {subtotal?.toLocaleString('id-ID')}</p>
                </div>
                <div className='flex justify-between text-sm font-normal'>
                    <p>TAX & FEES</p>
                    <p>{tax}%</p>
                </div>
                <div className='flex justify-between text-sm font-normal'>
                    <p>SHIPPING</p>
                    <p>{shipping !== 0 ?`RP ${shipping.toLocaleString('id-ID')}`: "-"}</p>
                </div>
            </div>
            <div className='flex justify-between text-xl text-primary font-bold' style={{padding:"12px",marginTop:"6px"}}>
                <p>TOTAL</p>
                <p>IDR {(subtotal+(tax/100*subtotal) + shipping).toLocaleString('id-ID')}</p>
            </div>
        </div>
    </div>
  )
}
