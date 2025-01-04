"use client"

import { getDetailUser, login } from '@/api/auth';
import { loginSuccess } from '@/redux/slices/slice';
import { Icon } from '@iconify/react'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

export default function AuthInput() {
    const dispatch = useDispatch();
    const [ loginForm, setLoginForm ] = useState({
        email:"",
        password:"",
    })
    const router = useRouter();
    const [isError, setIsError] = useState('');

    const handleChange = (e) => {
        setLoginForm({
            ...loginForm,
            [e.target.name]: e.target.value
        });
    };

    const handleLogin = async(e) =>{
        e.preventDefault();
        try{
            const res = await login(loginForm); 
            const profile = await getDetailUser(res.accessToken);
            setIsError('');
            const token = res.accessToken;
            const user = profile.data[0];
            localStorage.setItem('token', token)
            router.replace('/products');
            dispatch(loginSuccess({user}));
        }catch(err){
            console.log(err);
            setIsError(err?.response?.data?.msg || 'Unauthorized');
        }
    }

    const handleSignup = ()=>{
      router.replace('/signup');
    };
    const handleForgotPass = () => {
        router.replace("/forgot-password");
    };
  return (
    <div className='flex flex-col justify-center items-center'>
        <form onSubmit={handleLogin}   className='flex flex-col justify-center items-center gap-6 w-full mt-20 p-10'>
            <div className='flex flex-col w-5/6 gap-1'>
                <label htmlFor="email" className='font-medium text-slate-600 text-sm'>Email Address:</label>
                <input type="email" id='email' name="email" placeholder="Enter your email address" 
                className='border border-slate-400 rounded-lg p-3 text-sm w-full focus:ring-1'
                value={loginForm.email} onChange={handleChange}
                />
            </div>
            <div className='flex flex-col w-5/6 gap-1'>
                <label htmlFor="password" className='font-medium text-slate-600 text-sm'>Password:</label>
                <input type="password" id='password' name="password" placeholder="Enter your password"
                className='border border-slate-400 rounded-lg p-3 text-sm w-full focus:ring-1'
                value={loginForm.password} onChange={handleChange}
                />
                <p className='text-sm font-semibold text-primary hover:underline cursor-pointer mt-4'
                   onClick={handleForgotPass}
                >
                    Forgot Password?
                </p>
            </div>
            {isError && (
                    <div className='flex p-3 items-center bg-red-500 w-5/6 rounded-md shadow-slate-200 shadow-md'>
                        <p className='text-base font-medium text-white'>{isError}</p>
                    </div>
                )}
            <div className='flex flex-col w-5/6 gap-4'>
                <button
                    type='submit'   
                    className="w-full h-8 md:h-11 bg-secondary rounded-xl font-medium md:text-sm hover:bg-secondaryHover active:bg-secondaryActive text-primary shadow-slate-200 shadow-md"
                >
                    Login
                </button>
                <button 
                    className="flex justify-center items-center gap-4 w-full h-8 md:h-11 bg-white rounded-xl font-medium md:text-sm hover:bg-slate-300 shadow-slate-200 shadow-md"
                    // style={{ boxShadow: " rgba(0, 0, 0, 0.2) 0px 18px 50px -10px" }}
                >
                    <Icon
                    icon="logos:google-icon"
                    className='text-lg'
                    />
                    Login with Google
                </button>
            </div>
            <div className='flex flex-col w-5/6 gap-4'>
                <div className='w-full flex flex-row justify-around items-center gap-2'>
                    <div className='border border-slate-300 h-0 w-1/3'></div>
                    <p className='text-xs w-1/3 text-slate-400 font-medium'>Dont have an account?</p>
                    <div className='border border-slate-300 h-0 w-1/3'></div>
                </div>
                <button         
                    className="flex justify-center items-center gap-4 w-full h-8 md:h-11 bg-primary rounded-xl font-medium md:text-sm text-white shadow-slate-200 shadow-md"
                    onClick={handleSignup}
                >
                    Sign Up Here
                </button>
            </div>
        </form>
    </div>
  )
}
