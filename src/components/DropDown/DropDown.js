"use client"

import { logout } from '@/redux/slices/slice';
import { persistor } from '@/redux/store';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function DropDown({setOpenDropDown}) {
    const dispatch = useDispatch();
    const { status } = useSelector(state => state.login);
    const router = useRouter();
    const handleLogout = ()=>{
        dispatch(logout());
        router.replace('/');
        localStorage.clear();
        };
        useEffect(() => {
            if (status === 'succeeded') {
              persistor.purge();  // Menghapus data persisted setelah logout berhasil
            }
          }, [status,router]);
  return (
    <div className='absolute flex flex-col gap-3 bg-white rounded-md' style={{padding:"10px ", minWidth:"140px", maxWidth:"400px", minHeight:"70px", top:"50px", right:"0px", border:"1px solid #DCDCDC", boxShadow:"rgba(0, 0, 0, 0.2) 0px 18px 50px -10px", cursor:"pointer"}}>
        <p className='hover:bg-[#DCDCDC] px-4 py-2 text-xs lg:text-sm' style={{borderBottom:"1px solid #DCDCDC"}}
          onClick={()=>{router.replace("/edit-profile"), setOpenDropDown(false)}}
        >
            Edit Profile
        </p>
        <p className='hover:bg-[#DCDCDC] px-4 py-2 text-xs lg:text-sm' style={{borderBottom:"1px solid #DCDCDC"}}
            onClick={handleLogout}
        >
            Log Out
        </p>
    </div>
  )
}
