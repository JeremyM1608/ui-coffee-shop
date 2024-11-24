"use client"

import { Icon } from '@iconify/react'
import { useRouter } from 'next/navigation';
import React from 'react'

export default function AuthSingup() {
    const router = useRouter();

    const handleLogin = ()=>{
      router.replace('/auth/login');
    };
  return (
    <div className='flex flex-col justify-center items-center'>
        <div className='flex flex-col justify-center items-center gap-4 w-full mt-20 p-10'>
            <div className='flex flex-col w-5/6 gap-1'>
                <label htmlFor="email" className='font-medium text-slate-600 text-sm'>Email Address:</label>
                <input type="email" name="email" placeholder="Enter your email address" 
                className='border border-slate-400 rounded-lg p-3 text-sm w-full focus:ring-1'
                />
            </div>
            <div className='flex flex-col w-5/6 gap-1'>
                <label htmlFor="password" className='font-medium text-slate-600 text-sm'>Password:</label>
                <input type="password" name="password" placeholder="Enter your password"
                className='border border-slate-400 rounded-lg p-3 text-sm w-full focus:ring-1'
                />
            </div>
            <div className='flex flex-col w-5/6 gap-1'>
                <label htmlFor="phone_number" className='font-medium text-slate-600 text-sm'>Phone Number:</label>
                <input type="tel" id="phone_number" name="phone_number" pattern="^[0-9]\d{13}$" placeholder="Enter your phone number" required
                className='border border-slate-400 rounded-lg p-3 text-sm w-full focus:ring-1'
                />
            </div>
            <div className='flex flex-col w-5/6 gap-4'>
                <button         
                    className="w-full h-8 md:h-11 bg-secondary rounded-xl font-medium md:text-sm hover:bg-secondaryHover active:bg-secondaryActive text-primary shadow-slate-200 shadow-md"
                    // style={{ boxShadow: " rgba(0, 0, 0, 0.2) 0px 18px 50px -10px" }}
                >
                    Sign Up
                </button>
                <button         
                    className="flex justify-center items-center gap-4 w-full h-8 md:h-11 bg-white rounded-xl font-medium md:text-sm hover:bg-slate-300 shadow-slate-200 shadow-md"
                    // style={{ boxShadow: " rgba(0, 0, 0, 0.2) 0px 18px 50px -10px" }}
                >
                    <Icon
                    icon="logos:google-icon"
                    className='text-lg'
                    />
                    Sign up with Google
                </button>
            </div>
            <div className='flex flex-col w-5/6 gap-4'>
                <div className='w-full flex flex-row justify-around items-center gap-2'>
                    <div className='border border-slate-300 h-0 w-1/3'></div>
                    <p className='text-xs w-1/3 text-slate-400 font-medium'>Already have an account?</p>
                    <div className='border border-slate-300 h-0 w-1/3'></div>
                </div>
                <button         
                    className="flex justify-center items-center gap-4 w-full h-8 md:h-11 bg-primary rounded-xl font-medium md:text-sm text-white shadow-slate-200 shadow-md"
                    onClick={handleLogin}
                >
                    Login Here
                </button>
            </div>
        </div>
    </div>
  )
}

