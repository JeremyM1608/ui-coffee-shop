"use client"

import { requestForOtp, resetNewPassword } from '@/api/auth';
import { forgotPassword, requestOtp } from '@/redux/slices/passwordSlice';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

export default function AuthResetPass() {
    const [ isShow, setIsShow ] = useState(false);
    const [minutes, setMinutes] = useState(1);
    const [seconds, setSeconds] = useState(59);
    const [ otp, setOtp ] = useState(new Array(6).fill(""));
    const [ isError, setIsError ] = useState("");
    const [isLoading, setIsLoading] = useState();
    const router = useRouter();
    const [email, setEmail] = useState("");

    useEffect(()=>{
        const interval = setInterval(()=>{
            if(seconds > 0){
                setSeconds(seconds - 1);
            }
            if(seconds === 0){
                if(minutes === 0){
                    clearInterval(interval)
                }
                else{
                    setSeconds(59);
                    setMinutes(minutes-1);
    
                }
            } 
        }, 1000)
        return ()=>{
            clearInterval(interval);
        }
    },[seconds, minutes])

    const handleTextChange = (e, index) =>{
        const value = e.target.value;
        if(isNaN(value)) return false;

        setOtp([...otp.map((v, i)=>(i === index ? e.target.value : v))]);
        if(value && e.target.nextSibling){
            e.target.nextSibling.focus();
        }else if(!value && e.target.previousSibling ){
            e.target.previousSibling.focus();
        }
    }
    const handleEmailChange = (e) =>{
        setEmail(e.target.value);
    }
    const handleSendRequest = async()=>{
        try {
            const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if(!email){
                return setIsError("please input your email")
            }
            if(!emailPattern.test(email)){
                return setIsError("please input the right email")
            }
            setIsLoading(true)
            const res = await requestForOtp({email:email});
            if(res){
                setIsShow(true);
                setIsLoading(false);
                setIsError("");
                setMinutes(1);
                setSeconds(59);
            }
        } catch (error) {
            setIsError(error.response.data.msg || "Unauthorized");
            setIsLoading(false)
        }
        
    }
    const handleSubmitOtp = async()=>{
        try {
            if(otp.length !== 6){
                return setIsError("please input otp ")
            }
            setIsLoading(true)
            const res = await resetNewPassword({otp:otp.join("")})
            if(res){
                router.replace("/login");
                setIsLoading(false)
                setIsError("");
            }
        } catch (error) {
            setIsError(error.response.data.msg || "Unauthorized");
            setIsLoading(false)
        }
        
    }
  return (
    <div className='flex flex-col justify-center items-center gap-10'>
    <div className='flex flex-col justify-center items-center gap-4 w-full mt-20 p-10'>
        <div className='flex flex-col w-5/6 gap-1 mb-5 justify-center items-center'>
        {
            !isShow
            ?
            (
                <>
                    <p className='text-2xl font-semibold'>Forgot your password?</p>
                    <p className='text-base font-light'>Dont worry, we got your back!</p>
                </>
            )
            :
            (
                <p className='text-2xl font-semibold'>Input Your Otp Here</p>
            )
        }
            
            
        </div>
        {
            !isShow
            ?
            (
                <div className='flex flex-col w-4/6 gap-1 mt-10'>
                    <input type="email" name="email"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="Enter your email address to get link" 
                    className='border border-slate-400 rounded-lg p-3 text-sm w-full focus:ring-1'
                    required
                    />
                </div>
            )
            :
            (
                <div className='flex flex-row w-4/6 gap-3 mt-5 mb-5 justify-center'>
                {
                    otp.map((v, i)=>(
                        <input type="text" name="otp" key={i}
                        value={v}
                        maxLength={1}
                        onChange={(e)=> handleTextChange(e, i)}
                        className='rounded-md text-sm text-center'
                        style={{width:"50px", minHeight:"40px", border:"1px solid #94a3b8", padding:"10px"}}
                        />
                    ))
                }
                </div>
            )
        }
        {isError && (
                    <div className='flex p-3 items-center bg-red-500 w-5/6 rounded-md shadow-slate-200 shadow-md'>
                        <p className='text-base font-medium text-white'>{isError}</p>
                    </div>
                )}
        <div className='flex flex-col w-4/6 gap-4'>
            {
                !isShow
                ?
                (
                    <button
                        onClick={handleSendRequest}         
                        className="flex items-center justify-center gap-1 w-full h-8 md:h-11 bg-secondary rounded-xl font-medium md:text-sm hover:bg-secondaryHover active:bg-secondaryActive text-primary shadow-slate-200 shadow-md"
                        // style={{ boxShadow: " rgba(0, 0, 0, 0.2) 0px 18px 50px -10px" }}
                    >
                        {
                            isLoading ? (<div className="spinner"></div>):""
                        }
                        Send
                    </button>
                )
                :
                (
                    <button         
                        className="flex items-center justify-center gap-1 w-full h-8 md:h-11 bg-secondary rounded-xl font-medium md:text-sm hover:bg-secondaryHover active:bg-secondaryActive text-primary shadow-slate-200 shadow-md"
                        // style={{ boxShadow: " rgba(0, 0, 0, 0.2) 0px 18px 50px -10px" }}
                        onClick={handleSubmitOtp}
                    >
                        {
                            isLoading === "loading" ? (<div className="spinner"></div>):""
                        }
                        Verify Otp
                    </button>
                )
            }
            
            
        </div>
        <div className='flex flex-col w-4/6 gap-4'>
            <div className='w-full justify-around items-center gap-2 flex flex-col'>
                
                {
                    isShow?(
                    <>
                        <p className='text-xs text-slate-600 font-medium'>Click here if you didnt receive any link in 2 minutes</p>
                        <p className='text-sm font-semibold'>
                            <span>
                                {minutes < 10 ? `0${minutes}`: minutes}
                                :
                                {seconds < 10 ? `0${seconds}`: seconds}
                            </span>
                        </p>
                    </>
                    ) :""
                }
                
            </div>
            {
                isShow
                ?
                (
                    <button
                        disabled={seconds > 0 || minutes > 0}
                        style={{backgroundColor:seconds > 0|| minutes > 0 ? "#DCDCDC" : "var(--primary)", color:seconds>0|| minutes > 0 ?"#9F9F9F" : "#FFFFFF"}}         
                        className="flex justify-center items-center gap-4 w-full h-8 md:h-11 rounded-xl font-medium md:text-sm shadow-slate-200 shadow-md"
                        onClick={()=>{setIsShow(false)}}
                    >
                        Resend Link
                    </button>
                )
                :
                ""
            }
            
        </div>
    </div>
</div>
  )
}
