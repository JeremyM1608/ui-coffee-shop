import { Icon } from '@iconify/react'
import React from 'react'

export default function Footer() {
  return (
    <footer className="flex md:justify-between p-24 md:flex-row gap-10" style={{background:"#F8F8F8"}}>
        <div className="md:w-1/4 w-1/2">
            <div className='flex gap-4'>
                <Icon className="text-primary" icon="line-md:buy-me-a-coffee-filled" style={{ fontSize: '30px'}}/>
                <p className="font-extrabold md:text-xl ">Coffee Shop</p>
            </div>
            <p className="text-grey-10 md:text-base mt-6">Coffee Shop is a store that sells some good meals, and especially coffee. We provide high quality beans</p>
            <div className='flex gap-4 mt-6'>
                <div className="flex justify-center items-center bg-secondary w-8 h-8 shadow-md rounded-full">
                    <Icon icon="line-md:facebook" className='text-primary text-base'/>
                </div>
                <div className="flex justify-center items-center bg-secondary w-8 h-8 shadow-md rounded-full">
                    <Icon icon="line-md:twitter" className='text-primary text-base'/>
                </div>
                <div className="flex justify-center items-center bg-secondary w-8 h-8 shadow-md rounded-full">
                    <Icon icon="line-md:instagram" className='text-primary text-base'/> 
                </div>
            </div>
            <p className="mt-8 text-slate-400 text-base">@2020CoffeeStore</p>
        </div>
        <div className="flex md:w-1/4 w-1/2 md:gap-10 md:flex-row flex-col justify-center md:mt-0 gap-20">
            <div className='flex flex-col gap-4 md:mr-10 md:mt-0 w-full'>
                <p className="text-lg font-semibold mb-2">Product</p>
                <p className='text-grey-10 text-base'>Download</p>
                <p className='text-grey-10 text-base'>Pricing</p>
                <p className='text-grey-10 text-base'>Location</p>
                <p className='text-grey-10 text-base'>Countries</p>
                <p className='text-grey-10 text-base'>Blog</p>
            </div>
            <div className='flex flex-col gap-4 md:ml-0 md:w-80 w-full'>
                <p className="text-lg font-semibold mb-2">Engage</p>
                <p className='text-grey-10 text-base'>Coffee Shop?</p>
                <p className='text-grey-10 text-base'>FAQ</p>
                <p className='text-grey-10 text-base'>About Us</p>
                <p className='text-grey-10 text-base'>Privacy policy</p>
                <p className='text-grey-10 text-base'>Terms of Service</p>
            </div>
        </div>
    </footer>
  )
}
