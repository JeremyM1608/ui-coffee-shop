"use client"

import React, { useEffect, useState } from 'react'
import Button from '../Button'
import useMediaQuery from '@/utils/use-media-query';
import { useDispatch, useSelector } from 'react-redux';
import { editPassword } from '@/redux/slices/passwordSlice';
import { useRouter } from 'next/navigation';



export default function ChangePass({close}) {
    const dispatch = useDispatch();
    const {status, error} = useSelector((state)=> state.password);
    const [isError, setIsError] = useState("");
    const [payload, setPayload] = useState({
        currPassword:"",
        newPassword: "",
        confirmNewPassword:""
    })
    const router = useRouter();
    const isBreakPoint = useMediaQuery(768);
    const handleChange = (e)=>{
        setPayload({
            ...payload,
            [e.target.name]:e.target.value
        })
    }
    const changePassInput = [
        {
            label:"Current Password",
            name:"currPassword",
            value:payload.currPassword,
        },
        {
            label:"New Password",
            name:"newPassword",
            value:payload.newPassword,
        },
        {
            label:"Confirm New Password",
            name:"confirmNewPassword",
            value:payload.confirmNewPassword,
        }
    ]
    const handleSubmit = async(e)=>{
        e.preventDefault();
        if(!payload.currPassword && !payload.newPassword && !payload.confirmNewPassword){
            setIsError("please fill all the input")
        }
        if(payload.newPassword !== payload.confirmNewPassword){
            setIsError("new password and confirm new password should be the same")
        }
        try {
            await dispatch(editPassword(payload))
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <div style={{position:"fixed", zIndex:"10", left:"0", top:"0", width: "100%", height:"100%", display:"flex", alignItems:"center", justifyContent:"center",backgroundColor:"rgba(0, 0, 0, 0.4)"}}>
        <div className="flex flex-col gap-6" style={{padding:"24px", minWidth:"500px", maxHeight:"700px", overflow:"auto"}}>
                <form className='flex flex-col w-full rounded-lg bg-white gap-6 relative' style={{padding:"34px",boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
                    <button className='absolute' style={{top:"10px", right:"20px"}} onClick={close}>
                            x
                    </button>
                    <div className='font-bold lg:text-base md:text-base text-sm'>
                        Edit Password
                    </div>
                    {
                        changePassInput.map((v,i)=>(
                        <div className='flex flex-col w-5/6 gap-1' key={i}>
                            <label htmlFor="password" className='font-medium text-slate-600 lg:text-sm md:text-sm text-xs'>{v.label}:</label>
                            <input type="password" id={v.name} name={v.name} placeholder={`Enter your ${v.label}`} value={v.value} onChange={handleChange}
                            className='border border-slate-400 rounded-lg p-3 lg:text-sm md:text-sm text-xs w-full focus:ring-1'
                            />
                        </div>
                        ))
                    }
                     {status === "failed" ? 
                    (
                        <div className='flex p-3 items-center bg-red-500 w-full rounded-md shadow-slate-200 shadow-md'>
                            <p className='lg:text-sm md:text-sm text-xs font-medium text-white'>{isError}</p>
                        </div>
                    )
                     : status === "succeeded" ? 
                    (
                        <div className='flex p-3 items-center bg-green-500 w-full rounded-md shadow-slate-200 shadow-md'>
                            <p className='lg:text-sm md:text-sm text-xs font-medium text-white'>edit password success </p>
                        </div>
                    ) 
                    :""
                    }
                    <Button 
                    type={"second"}
                    color={"brown"}
                    onClick={handleSubmit}
                    label={status==="loading"?"loading...":"Edit Password"}
                    disabled={status === "loading"}
                    sx={{marginTop:"30px"}}
                    />
                </form>
        </div>
    </div>

  )
}
