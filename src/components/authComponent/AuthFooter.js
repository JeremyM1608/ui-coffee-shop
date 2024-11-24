import { Icon } from '@iconify/react'
import React from 'react'

export default function AuthFooter() {
  return (
    <footer className="flex md:justify-between md:flex-row md:mt-20 mt-20 static lg:absolute lg:bottom-0 w-full" style={{background:"#F8F8F8"}}>
        <div className="md:w-1/2 w-1/2 p-12">
            <div className='flex gap-4'>
                <Icon className="text-primary text-2xl" icon="line-md:buy-me-a-coffee-filled"/>
                <p className="font-extrabold md:text-base ">Coffee Shop</p>
            </div>
            <p className="text-grey-10 md:text-xs mt-6">Coffee Shop is a store that sells some good meals, and especially coffee. We provide high quality beans</p>
            <div className='flex gap-4 mt-6'>
                <div className="flex justify-center items-center bg-secondary w-7 h-7 shadow-md rounded-full">
                    <Icon icon="line-md:facebook" className='text-primary text-sm'/>
                </div>
                <div className="flex justify-center items-center bg-secondary w-7 h-7 shadow-md rounded-full">
                    <Icon icon="line-md:twitter" className='text-primary text-sm'/>
                </div>
                <div className="flex justify-center items-center bg-secondary w-7 h-7 shadow-md rounded-full">
                    <Icon icon="line-md:instagram" className='text-primary text-sm'/> 
                </div>
            </div>
            <p className="mt-8 text-slate-400 text-xs">@2020CoffeeStore</p>
        </div>
        <div className="flex md:w-1/2 w-1/2 md:gap-10 md:flex-col flex-col justify-center md:mt-0 gap-20 p-12">
            <div className='flex flex-col gap-4 md:mt-0 w-full h-1/2'>
                <p className="text-base font-semibold mb-2">Product</p>
                <div className='flex gap-3 flex-col' >
                    <p className='text-grey-10 text-xs'>Download</p>
                    <p className='text-grey-10 text-xs'>Pricing</p>
                    <p className='text-grey-10 text-xs'>Location</p>
                    <p className='text-grey-10 text-xs'>Countries</p>
                    <p className='text-grey-10 text-xs'>Blog</p>
                </div>

            </div>
            <div className='flex flex-col gap-4 md:ml-0 w-full'>
                <p className="text-base font-semibold mb-2">Engage</p>
                <p className='text-grey-10 text-xs'>Coffee Shop?</p>
                <p className='text-grey-10 text-xs'>FAQ</p>
                <p className='text-grey-10 text-xs'>About Us</p>
                <p className='text-grey-10 text-xs'>Privacy policy</p>
                <p className='text-grey-10 text-xs'>Terms of Service</p>
            </div>
        </div>
    </footer>
  )
}
