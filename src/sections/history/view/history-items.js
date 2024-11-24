"use client"

import Image from 'next/image'
import img from '@/../public/images/customerImage/veggie.png'
import React, { useState } from 'react'
import CustDialog from '@/components/CustDialog'

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
    const [history, setHistory] = useState(historyData);  // State untuk data dengan status checkbox
    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);

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
                        history.map((v, i) => (
                            <div className='flex flex-row rounded-lg bg-white gap-2' key={i} style={{ padding: "16px", maxWidth: "394px", maxHeight: "150px", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
                                <Image src={v.imgProduct} alt='image'
                                    style={{ width: '75px', height: '75px', objectFit: "contain", borderRadius: "100%" }}
                                />
                                <div className='flex flex-col gap-2'>
                                    <div className='font-medium text-base'>{v.namaProduct}</div>
                                    <div className='flex justify-between items-center'>
                                        <div className='flex flex-col text-sm font-normal text-primary'>
                                            <p>{v.price}</p>
                                            <p>{v.status}</p>
                                        </div>
                                        <div className="flex justify-end items-center h-5">
                                            <input
                                                id={`item-check-${i}`}
                                                type="checkbox"
                                                checked={v.checked}
                                                onChange={() => handleCheckboxChange(i)}  // Mengatur perubahan status checkbox
                                                className="w-4 h-4 border border-primary rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

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
