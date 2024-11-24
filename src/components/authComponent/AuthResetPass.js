import React from 'react'

export default function AuthResetPass() {
  return (
    <div className='flex flex-col justify-center items-center gap-10'>
    <div className='flex flex-col justify-center items-center gap-4 w-full mt-20 p-10'>
        <div className='flex flex-col w-5/6 gap-1 mb-5 justify-center items-center'>
            <p className='text-2xl font-semibold'>Forgot your password?</p>
            <p className='text-base font-light'>Dont worry, we got your back!</p>
        </div>
        <div className='flex flex-col w-4/6 gap-1 mt-10'>
            <input type="text" name="email" placeholder="Enter your email address to get link" 
            className='border border-slate-400 rounded-lg p-3 text-sm w-full focus:ring-1'
            />
        </div>
        <div className='flex flex-col w-4/6 gap-4'>
            <button         
                className="w-full h-8 md:h-11 bg-secondary rounded-xl font-medium md:text-sm hover:bg-secondaryHover active:bg-secondaryActive text-primary shadow-slate-200 shadow-md"
                // style={{ boxShadow: " rgba(0, 0, 0, 0.2) 0px 18px 50px -10px" }}
            >
                Send
            </button>
        </div>
        <div className='flex flex-col w-4/6 gap-4'>
            <div className='w-full justify-around items-center gap-2 flex flex-col'>
                <p className='text-xs text-slate-600 font-medium'>Click here if you didnt receive any link in 2 minutes</p>
                <p className='text-sm font-semibold'>01:52</p>
            </div>
            <button         
                className="flex justify-center items-center gap-4 w-full h-8 md:h-11 bg-primary rounded-xl font-medium md:text-sm text-white shadow-slate-200 shadow-md"
            >
                Resend Link
            </button>
        </div>
    </div>
</div>
  )
}
