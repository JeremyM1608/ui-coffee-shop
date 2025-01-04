"use client"

import Image from 'next/image'
import img from "@/../public/images/customerImage/bg-img.png"
import React, { useEffect, useState } from 'react'
import PaymentOrder from './view/paymentOrder'
import OrderFlow from './view/orderFlow'
import CustomerOrder from './view/customerOrder'
import { useDispatch, useSelector } from 'react-redux'
import { getTransaction, paymentUpdate } from '@/redux/slices/transactionSlice'
import CustomSnackBar from '@/components/custSnackBar'

export default function Orders() {
  const [curr,setCurr] = useState(0) ;
  const dispatch = useDispatch();
  const [successSnackBar, setSuccessSnackBar] = useState(false);
  const { transaction, status, error, successMessage } = useSelector(state => state.transaction);

  const idTransaction = transaction[curr]?.id_transaction;
  const paymentStatus = "paid"

  useEffect(()=>{
    dispatch(getTransaction({status:"waiting for confirmation"}))
  },[dispatch])
  const handleConfirm = async(e)=>{
    e.preventDefault();
    try {
      await dispatch(paymentUpdate({id:parseInt(idTransaction), status:paymentStatus}));
      setSuccessSnackBar(true);
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
            <OrderFlow/>
            <div className='lg:text-3xl md:text-3xl text-xl font-semibold text-white w-2/3' style={{marginLeft:"18px",marginTop:"16px",textShadow: "4px 4px 2px rgba(0,0,0,0.6)"}}>Finish your customer order now.</div>
            <div className='flex lg:flex-row md:flex-row flex-col' style={{width:"100%",height:"80%", overflow:"auto"}}>
                <CustomerOrder transaction={transaction} curr={curr} setCurr={setCurr}/>
                <PaymentOrder transaction={transaction} curr={curr} handleConfirm={handleConfirm}/>
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
