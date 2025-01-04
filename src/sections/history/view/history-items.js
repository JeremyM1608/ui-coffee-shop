"use client"

import Image from 'next/image'
import img from '@/../public/images/customerImage/veggie.png'
import React, { useEffect, useState } from 'react'
import CustDialog from '@/components/CustDialog'
import { useDispatch, useSelector } from 'react-redux'
import { getTransaction, getUserTransaction } from '@/redux/slices/transactionSlice'
import { Icon } from '@iconify/react'
import useMediaQuery from '@/utils/use-media-query'
import Modal from '@/components/modal/Modal'

const historyData = [
    {
        imgProduct:img,
        idProduct:"1001",
        namaProduct:"Veggie Tomato mix",
        price:"34.000",
        status:"Delivered",
        checked:false
    },
    {
        imgProduct:img,
        idProduct:"1001",
        namaProduct:"Veggie Tomato mix",
        price:"34.000",
        status:"Delivered",
        checked:false
    },
    {
        imgProduct:img,
        idProduct:"1001",
        namaProduct:"Veggie Tomato mix",
        price:"34.000",
        status:"Delivered",
        checked:false
    },
    {
        imgProduct:img,
        idProduct:"1001",
        namaProduct:"Veggie Tomato mix",
        price:"34.000",
        status:"Delivered",
        checked:false
    },
    {
        imgProduct:img,
        idProduct:"1001",
        namaProduct:"Veggie Tomato mix",
        price:"34.000",
        status:"Delivered",
        checked:false
    },
    {
        imgProduct:img,
        idProduct:"1001",
        namaProduct:"Veggie Tomato mix",
        price:"34.000",
        status:"Delivered",
        checked:false
    },
    {
        imgProduct:img,
        idProduct:"1001",
        namaProduct:"Veggie Tomato mix",
        price:"34.000",
        status:"Delivered",
        checked:false
    },
    {
        imgProduct:img,
        idProduct:"1001",
        namaProduct:"Veggie Tomato mix",
        price:"34.000",
        status:"Delivered",
        checked:false
    },
    {
        imgProduct:img,
        idProduct:"1001",
        namaProduct:"Veggie Tomato mix",
        price:"34.000",
        status:"Delivered",
        checked:false
    },
    {
        imgProduct:img,
        idProduct:"1001",
        namaProduct:"Veggie Tomato mix",
        price:"34.000",
        status:"Delivered",
        checked:false
    },
    {
        imgProduct:img,
        idProduct:"1001",
        namaProduct:"Veggie Tomato mix",
        price:"34.000",
        status:"Delivered",
        checked:false
    },
    {
        imgProduct:img,
        idProduct:"1001",
        namaProduct:"Veggie Tomato mix",
        price:"34.000",
        status:"Delivered",
        checked:false
    },
    {
        imgProduct:img,
        idProduct:"1001",
        namaProduct:"Veggie Tomato mix",
        price:"34.000",
        status:"Delivered",
        checked:false
    },
    {
        imgProduct:img,
        idProduct:"1001",
        namaProduct:"Veggie Tomato mix",
        price:"34.000",
        status:"Delivered",
        checked:false
    },
  
]

export default function HistoryItems() {
    const isBreakPoint = useMediaQuery(768);
    const [history, setHistory] = useState(historyData);  // State untuk data dengan status checkbox
    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
    const [ clickedId, setClickedId ]= useState(null);
    const dispatch = useDispatch();;
    const [openModal, setOpenModal] = useState(false);
    const { userTransaction } = useSelector(state => state.transaction);

    useEffect(()=>{
        dispatch(getUserTransaction());
    },[dispatch])
    // Fungsi untuk menangani perubahan checkbox
    const handleCheckboxChange = (index) => {
        const updatedHistory = [...history];
        updatedHistory[index].checked = !updatedHistory[index].checked;
        setHistory(updatedHistory);
    };

    // Fungsi untuk menghapus item yang dicentang
    const handleDelete = () => {
        const filteredHistory = history.filter(item => !item.checked);
        setHistory(filteredHistory);
        setDeleteDialogOpen(false);
    };

    // Fungsi untuk memilih semua item
    const handleSelectAll = () => {
        const allSelected = history.every(item => item.checked);
        const updatedHistory = history.map(item => ({
            ...item,
            checked: !allSelected
        }));
        setHistory(updatedHistory);
    };

    const anyChecked = history.some(item => item.checked);

    return (
        <>
            <div className='flex flex-col gap-4' style={{ gap: "20px", width: "100%", height: "80%", overflow: "auto", padding: "50px" }}>
                <div className='text-white text-sm font-bold flex ' style={{ justifyContent: "flex-end" }}>
                {anyChecked ? (
                        <p className='hover:underline cursor-pointer' onClick={() => setDeleteDialogOpen(true)}>Delete</p>
                    ) : (
                        <p className='hover:underline cursor-pointer' onClick={handleSelectAll}>Select All</p>
                    )}
                </div>
                <div className='flex flex-row gap-3 items-center ' style={{ flexWrap: "wrap" }}>
                    {
                        userTransaction.map((v, i) => {
                            let dateString = v.time_reservation;
                            let totalQty = v.transaction_details.reduce((acc, detail)=>{
                                return acc + detail.qty;
                            },0);
                            let totalPrice = v.transaction_details.reduce((acc, detail)=>{
                                let price = detail.product_price * detail.qty
                                return acc + price
                            },0)
                            let tax = 12;
                            let date = new Date(dateString.replace(" ", "T"));
                            const months = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
                            
                            return(<div className='flex flex-row rounded-lg bg-white gap-2' key={i} style={{ padding: "16px", minWidth:"100px",maxWidth: "300px", minHeight:"100px",maxHeight: "300px", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
                                <div className='flex flex-col gap-2 justify-center items-center' style={{minWidth:isBreakPoint?"60px":"80px", padding:"10px", borderRight:"1px solid #000"}}>
                                    <p className='font-normal lg:text-base text-sm'>{months[date.getMonth()]}</p>
                                    <p className='lg:text-3xl text-xl font-bold'>{date.getDate()}</p>
                                    <p className='font-normal lg:text-base text-sm'>{date.getFullYear()}</p>
                                    <p className='text-xs font-medium'>{date.getHours().toString().padStart(2, '0')}:{date.getMinutes().toString().padStart(2, '0')}</p>
                                </div>
                                <div className='flex flex-col gap-3'>
                                    <div className='flex items-center justify-center font-medium lg:text-base text-sm' style={{borderBottom:"1px dashed #000"}}>
                                        INV-{1000+v.id_transaction}
                                    </div>
                                    <div className='flex items-center gap-4'>
                                        <div className='flex flex-col'>
                                            <div className='flex gap-2 lg:text-sm text-xs font-normal text-primary'>
                                                <p>Items:</p>
                                                <p>{totalQty}</p> 
                                            </div>
                                            <div className='flex gap-2 lg:text-sm text-xs font-normal text-primary'>
                                                <p>Tax:</p>
                                                <p>{tax}%</p> 
                                            </div>
                                            <div className='flex flex-col text-[#000]'>
                                                <p className='font-semibold lg:text-lg text-base'>Total</p>
                                                <p className='font-normal lg:text-sm text-xs'>Rp.{parseInt(totalPrice + ((tax/100)*totalPrice)).toLocaleString('id-ID')}</p>
                                            </div>
                                        </div>
                                        <div className="flex relative" style={{minWidth:isBreakPoint?"50px":"87px", height:"100%"}}>
                                            <div className='flex flex-col text-xs'>
                                                <p className='font-bold'>Status:</p>
                                                <p style={{fontSize:"10px"}}>{v.status}</p>
                                            </div>
                                            <button className='flex flex-row items-center text-xs  absolute justify-evenly hover:text-[#223cb3]' style={{bottom:"0px", right: "0px", color:"#304ed8"}}
                                                onClick={()=>{setClickedId(v.id_transaction), setOpenModal(true)}}
                                            >
                                                Show Detail
                                                <Icon icon={"lsicon:double-arrow-right-outline"} style={{width:"16px", height:"16px"}}/>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>)
                        })
                    }
                </div>
            </div>
            {
                openModal && (
                    <Modal userTransaction={userTransaction} transactionDetailId={clickedId}
                        closeModal={()=> setOpenModal(false)}
                    />
                )
            }
            {deleteDialogOpen && (
                <CustDialog
                    dialog={"Are you sure you want to delete the selected items?"}
                    closeDialog={() => setDeleteDialogOpen(false)}
                    buttonDialog={"Delete"}
                    actionClick={handleDelete}  // Memastikan hanya item yang dicentang yang dihapus
                    icon
                />
            )}
        </>
    );
}
