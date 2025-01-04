"use client"

import { Icon } from '@iconify/react';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import NavRight from './NavRight';
import NavLogo from './NavLogo';
import NavUser from './NavUser';
import { useSelector } from 'react-redux';

export default function Nav() {
  const pathName = usePathname();
  const { isLogin, user } = useSelector((state) => state.login);
  const { transaction } = useSelector(state => state.transaction);
  const cart = useSelector((state) => state?.yourCart?.cart);
  const transactionLength = transaction.length;
  const cartLength = cart.length;
  const router = useRouter()
  useEffect(()=>{
        return console.log(pathName)
  },[pathName]);
  return (
    <div className="flex h-20 sticky top-0 z-10 justify-around items-center bg-white " style={{boxShadow:"rgba(17, 17, 26, 0.1) 0px 1px 0px"}}>
      <NavLogo/>
        <div className='flex gap-6'>
            <div 
            className= {`cursor-pointer transition all delay-100 hover:text-primary hover:underline decoration-2 decoration-primary ${pathName === "/" ? "underline decoration-2 decoration-primary text-primary" :"font-normal text-grey-10 "} md:text-base text-xs`}
            onClick={()=>router.push("/")}
            >
              Home
            </div>
            <div 
            className={`cursor-pointer transition all delay-100 hover:text-primary hover:underline decoration-2 decoration-primary ${pathName === "/products" ? "underline decoration-2 decoration-primary text-primary" :"font-normal text-grey-10"} md:text-base text-xs`}
            onClick={()=>router.push("/products")}
            >
              Product
            </div>
            {
              user?.role === "admin"
              ?
              <>
                <div className={`relative cursor-pointer transition all delay-100 hover:text-primary hover:underline decoration-2 decoration-primary ${pathName === "/orders" ? "underline decoration-2 decoration-primary text-primary" :"font-normal text-grey-10"} md:text-base text-xs`} 
                onClick={()=>router.push("/orders")}>
                  {
                    transactionLength  > 0 
                    ?
                    <>
                      <div className="rounded-full absolute bg-primary text-xs text-white font-medium animated-ping" style={{width:"17px",height:"17px", top:"-7px", right:"-12px"}}/>
                      <div className="flex rounded-full absolute bg-primary text-xs text-white font-medium justify-center items-center" style={{width:"17px",height:"17px", top:"-7px", right:"-12px"}}>
                          {transactionLength}
                      </div>
                    </>
                    :
                    ""
                  }
                  Orders
                </div>
                <div className={`cursor-pointer transition all delay-100 hover:text-primary hover:underline decoration-2 decoration-primary ${pathName === "/dashboard" ? "underline decoration-2 decoration-primary text-primary" :"font-normal text-grey-10"} md:text-base text-xs`}
                onClick={()=>router.push("/dashboard")}>
                  Dashboard
                </div>
              </>
              :
              (
              <>
                <div className={`relative cursor-pointer transition all delay-100 hover:text-primary hover:underline decoration-2 decoration-primary ${pathName === "/your-cart" ? "underline decoration-2 decoration-primary text-primary" :"font-normal text-grey-10"} md:text-base text-xs`} 
                onClick={()=>router.push("/your-cart")}>
                  {
                    cartLength > 0
                    ?
                    <>
                      <div className="rounded-full absolute bg-primary text-xs text-white font-medium animated-ping" style={{width:"17px",height:"17px", top:"-7px", right:"-14px"}}/>
                      <div className="flex items-center justify-center rounded-full absolute bg-primary text-xs text-white font-medium" style={{width:"17px",height:"17px", top:"-7px", right:"-14px"}}>
                          {cartLength}
                      </div>
                    </>
                    :
                    ""
                  }
                  Your Cart
                </div>
                <div className={`cursor-pointer transition all delay-100 hover:text-primary hover:underline decoration-2 decoration-primary ${pathName === "/history" ? "underline decoration-2 decoration-primary text-primary" :"font-normal text-grey-10"} md:text-base text-xs`}
                onClick={()=>router.push("/history")}>
                  History
                </div>
              </>
              )
            }
       
        </div>
        {
          isLogin
          ?
          <NavUser/>
          :
          <NavRight/>
        }

    </div>
  )
}
