"use client"
import Image from 'next/image';
import img1 from '@/../public/images/defaultProduct.jpg';
import React from 'react'
import { useSelector } from 'react-redux';
import useMediaQuery from '@/utils/use-media-query';

export default function Modal({transactionDetailId, userTransaction, closeModal}) {
    const transactionDetail = userTransaction.find((transaction) => transaction.id_transaction === transactionDetailId)
    const sizeMap = { 1: "Reguler", 2: "Large", 3: "Extra Large" };
    const products = useSelector((state) => state.product.products);
    const isBreakPoint = useMediaQuery(1500);
    const subtotal = transactionDetail.transaction_details?.reduce((total, v) => {
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
    <div style={{position:"fixed", zIndex:"10", left:"0", top:"0", width: "100%", height:"100%", display:"flex", alignItems:"center", justifyContent:"center",backgroundColor:"rgba(0, 0, 0, 0.4)"}}>
        <div className="flex flex-col gap-6" style={{padding:"24px", minWidth:"500px", maxHeight:isBreakPoint?"400px":"700px", overflow:"auto"}}>
                <div className='flex flex-col w-full rounded-lg bg-white' style={{padding:"34px",boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
                    <button className='flex flex-start' onClick={closeModal}>
                        x
                    </button>
                    <div className='flex justify-center items-center lg:text-3xl md:text-3xl text-xl text-primary font-semibold' >Order Summary</div>
                    <div className='flex gap-3 justify-center items-center text-base text-primary' style={{ marginBottom:"75px"}}><p className='font-semibold'>Status:</p><p className='text-sm font-normal'>{transactionDetail.status}</p></div>
                    <div className='flex flex-col gap-3' style={{borderBottom:"1px solid #DCDCDC"}} >
                        {
                            transactionDetail.transaction_details?.length > 0
                            ?
                            transactionDetail.transaction_details.map((v)=>{
                                const product = products.find((prod)=> prod.product_id === v.id_product)
                                const size = sizeMap[v.id_size];
                                return(
                                <div className='flex justify-around items-center' style={{paddingBottom:"10px"}} key={v.id_product}>
                                    <Image src={product?.product_url_photo ?`${process.env.NEXT_PUBLIC_BACKEND_URL}${product.product_url_photo}` : img1} alt='image' 
                                    width={82}
                                    height={90}
                                    style={{ width: '82px', height:'90px', objectFit: "cover" }}/>
                                    <div className=' flex flex-col text-sm font-normal'>
                                        <p>{v.product_name}</p>
                                        <p>x{v.qty}</p>
                                        <p>{size}</p>
                                    </div>
                                    <div className='text-sm font-normal'>IDR {parseInt(v.product_price).toLocaleString('id-ID')}</div>
                                </div>
                                )
                            })
                            :
                            <div className='flex justify-center items-center lg:text-3xl md:text-3xl text-xl text-primary font-semibold' style={{ marginBottom:"75px"}}>cannot find transaction</div>
                        }
                    </div>
                    <div className='flex flex-col gap-2' style={{padding:"12px"}}>
                        <div className='flex justify-between text-sm font-normal'>
                            <p>SUBTOTAL</p>
                            <p>RP {parseInt(subtotal).toLocaleString('id-ID')}</p>
                        </div>
                        <div className='flex justify-between text-sm font-normal'>
                            <p>TAX & FEES</p>
                            <p>{tax}%</p>
                        </div>
                        <div className='flex justify-between text-sm font-normal'>
                            <p>SHIPPING</p>
                            <p>0</p>
                        </div>
                    </div>
                    <div className='flex justify-between text-xl text-primary font-bold' style={{padding:"12px",marginTop:"6px"}}>
                        <p>TOTAL</p>
                        <p>IDR {(subtotal+(tax/100*subtotal) + shipping).toLocaleString('id-ID')}</p>
                    </div>
                </div>
          </div>
    </div>
  )
}
