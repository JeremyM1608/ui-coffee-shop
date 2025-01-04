"use client"

import { register } from '@/api/auth';
import { Icon } from '@iconify/react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import CustomSnackBar from '../custSnackBar';

export default function AuthSingup() {
    const [registerForm, setRegisterForm] = useState({
        username: "",
        email: "",
        password: "",
        confirm_password: "",
        phone_number: ""
    });

    const [successSnackBar, setSuccessSnackBar] = useState(false);
    const [isError, setIsError] = useState('');
    const [dialog, setDialog] = useState('');
    const [status, setStatus] = useState(''); // Menyimpan status (success/error)
    const router = useRouter();

    const handleChange = (e) => {
        setRegisterForm({
            ...registerForm,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await register(registerForm);  // Panggil API register
            setIsError('');
            setDialog('Sign up success');
            setStatus('success');
            setSuccessSnackBar(true);  // Menampilkan snackbar sukses
            router.replace('/login');
        } catch (err) {
            console.log(err);
            setIsError(err.response.data.msg || 'Unauthorized');
            setDialog('Sign up failed'); // Tampilkan pesan error jika ada
            setStatus('error');
            setSuccessSnackBar(true);  // Menampilkan snackbar error
        }
    };

    return (
        <div className='flex flex-col justify-center items-center' onSubmit={handleSubmit}>
            <div className='flex flex-col justify-center items-center gap-4 w-full mt-20 p-10'>
                {/* Form Inputs */}
                <div className='flex flex-col w-5/6 gap-1'>
                    <label htmlFor="username" className='font-medium text-slate-600 text-sm'>Username:</label>
                    <input type="text" id='username' name="username" placeholder="Enter your username" value={registerForm.username} onChange={handleChange}
                        className='border border-slate-400 rounded-lg p-3 text-sm w-full focus:ring-1'
                    />
                </div>

                <div className='flex flex-col w-5/6 gap-1'>
                    <label htmlFor="email" className='font-medium text-slate-600 text-sm'>Email Address:</label>
                    <input type="email" id='email' name="email" placeholder="Enter your email address" value={registerForm.email} onChange={handleChange}
                        className='border border-slate-400 rounded-lg p-3 text-sm w-full focus:ring-1'
                    />
                </div>

                <div className='flex flex-col w-5/6 gap-1'>
                    <label htmlFor="password" className='font-medium text-slate-600 text-sm'>Password:</label>
                    <input type="password" id="password" name="password" placeholder="Enter your password" value={registerForm.password} onChange={handleChange}
                        className='border border-slate-400 rounded-lg p-3 text-sm w-full focus:ring-1'
                    />
                </div>

                <div className='flex flex-col w-5/6 gap-1'>
                    <label htmlFor="confirm_password" className='font-medium text-slate-600 text-sm'>Confirm Password:</label>
                    <input type="password" id="confirm_password" name="confirm_password" placeholder="Enter your confirm password" value={registerForm.confirm_password} onChange={handleChange}
                        className='border border-slate-400 rounded-lg p-3 text-sm w-full focus:ring-1'
                    />
                </div>

                <div className='flex flex-col w-5/6 gap-1'>
                    <label htmlFor="phone_number" className='font-medium text-slate-600 text-sm'>Phone Number:</label>
                    <input type="tel" id="phone_number" name="phone_number" pattern="^[0-9]\d{13}$" placeholder="Enter your phone number" value={registerForm.phone_number} onChange={handleChange}
                        required
                        className='border border-slate-400 rounded-lg p-3 text-sm w-full focus:ring-1'
                    />
                </div>

                {/* Submit Buttons */}
                <div className='flex flex-col w-5/6 gap-4'>
                    <button
                        className="w-full h-8 md:h-11 bg-secondary rounded-xl font-medium md:text-sm hover:bg-secondaryHover active:bg-secondaryActive text-primary shadow-slate-200 shadow-md"
                        onClick={handleSubmit}
                    >
                        Sign Up
                    </button>
                    <button
                        className="flex justify-center items-center gap-4 w-full h-8 md:h-11 bg-white rounded-xl font-medium md:text-sm hover:bg-slate-300 shadow-slate-200 shadow-md"
                        onClick={() => (setSuccessSnackBar(true))}
                    >
                        <Icon icon="logos:google-icon" className='text-lg' />
                        Sign up with Google
                    </button>
                </div>

                {/* Error Display */}
                {isError && (
                    <div className='flex p-3 items-center bg-red-500 w-5/6 rounded-md shadow-slate-200 shadow-md'>
                        <p className='text-base font-medium text-white'>{isError}</p>
                    </div>
                )}

                {/* SnackBar (Toast) */}
                {
                    successSnackBar && (
                        <CustomSnackBar 
                            status={status}  // success/error
                            dialog={dialog}  // Pesan yang akan ditampilkan
                            successSnackBar={successSnackBar} 
                            setSuccessSnackBar={setSuccessSnackBar}
                        />
                    )
                }

                {/* Footer Links */}
                <div className='flex flex-col w-5/6 gap-4'>
                    <div className='w-full flex flex-row justify-around items-center gap-2'>
                        <div className='border border-slate-300 h-0 w-1/3'></div>
                        <p className='text-xs w-1/3 text-slate-400 font-medium'>Already have an account?</p>
                        <div className='border border-slate-300 h-0 w-1/3'></div>
                    </div>
                    <button
                        className="flex justify-center items-center gap-4 w-full h-8 md:h-11 bg-primary rounded-xl font-medium md:text-sm text-white shadow-slate-200 shadow-md"
                        onClick={() => router.replace('/login')}
                    >
                        Login Here
                    </button>
                </div>
            </div>
        </div>
    );
}
