"use client"

import Image from 'next/image'
import img from "@/../public/images/customerImage/bg-img.png"
import React, { useEffect, useState } from 'react'
import CheckOutFlow from './view/checkOutFlow'
import OrderSummary from './view/orderSummary'
import PaymentOrder from './view/paymentOrder'
import { useDispatch, useSelector } from 'react-redux'
import { addTransaction } from '@/redux/slices/transactionSlice'
import CustomSnackBar from '@/components/custSnackBar'
import { clearCart } from '@/redux/slices/yourCartSlice'

export default function YourCart() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.login);
  const { status, error, successMessage } = useSelector((state)=> state.transaction);
  const [successSnackBar, setSuccessSnackBar] = useState(false);
  const cart = useSelector((state) => state?.yourCart?.cart);
  const products = useSelector((state) => state.product.products);
  const now = new Date(Date.now());

// Format tahun, bulan, hari, jam, menit, detik
const year = now.getFullYear();
const month = String(now.getMonth() + 1).padStart(2, '0');  // Bulan dimulai dari 0, jadi tambahkan 1
const day = String(now.getDate()).padStart(2, '0');
const hours = String(now.getHours()).padStart(2, '0');
const minutes = String(now.getMinutes()).padStart(2, '0');
const seconds = String(now.getSeconds()).padStart(2, '0');

// Gabungkan semuanya untuk mendapatkan format yang diinginkan
const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  const [ transactionData, setTransactionData ] = useState({
    id_user: user?.id,
    id_delivery_method:1,
    id_cashier : 1,
    payment_method:"card",
    status:"waiting for confirmation",
    time_reservation:formattedDate,
    transaction_detail:cart
  });

  const handleAddTransaction = async(e)=>{
    e.preventDefault();
    try {
        await dispatch(addTransaction(transactionData));
        setSuccessSnackBar(true);
        dispatch(clearCart());
    } catch (err) {
        console.log(err);
        setSuccessSnackBar(true);
    }
    }
  return (
    <div className='w-full relative' style={{height:"fit-content"}}>
        <Image src={img} alt='image'  
         style={{ width: '100%', height:'100%', objectFit: "cover" }}
        />
        <div style={{position:"absolute", width:"100%", height:"100%" , top:"0", padding:"30px"}}>
            <CheckOutFlow/>
            <div className='lg:text-3xl md:text-3xl text-xl font-semibold text-white w-2/3' style={{marginLeft:"18px",marginTop:"16px",textShadow: "4px 4px 2px rgba(0,0,0,0.6)"}}>Checkout your item now!</div>
            <div className='flex lg:flex-row md:flex-row flex-col' style={{width:"100%",height:"80%", overflow:"auto"}}>
                <OrderSummary cart={cart} products={products} />
                <PaymentOrder onClick={handleAddTransaction} cart={cart} transactionData={transactionData} setTransactionData={setTransactionData} />
            </div>
            {
                status === "succeeded" && (
                    <CustomSnackBar 
                        status="success"  // success/error
                        dialog={successMessage}  // Pesan yang akan ditampilkan
                        successSnackBar={successSnackBar} 
                        setSuccessSnackBar={setSuccessSnackBar}
                    />
                )
            }
            {
                status === "failed" && (
                    <CustomSnackBar 
                        status="error"  // success/error
                        dialog={error}  // Pesan yang akan ditampilkan
                        successSnackBar={successSnackBar} 
                        setSuccessSnackBar={setSuccessSnackBar}
                    />
                )
            }
        </div>
    </div>
  )
}
