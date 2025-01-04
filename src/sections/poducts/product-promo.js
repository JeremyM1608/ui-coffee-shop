"use client"

import { PromoData } from "@/_mock";
import Button from "@/components/Button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import useMediaQuery from '@/utils/use-media-query';
import React from "react";
import { useSelector } from "react-redux";

const termsAndCondition = [
    "1. You can only apply 1 coupon per day",
    "2. It only for dine in",
    "3. Buy 1 get 1 only for new user",
    "4. Should make member card to apply coupon"]


export default function ProductsPromo() {
  const role = useSelector((state) => state?.login?.user?.role);
  const isBreakPoint = useMediaQuery(760);
  
  const router = useRouter();
  return (
    <div className="flex flex-col p-10 gap-10 md:w-1/6 lg:w-1/6 md:h-full lg:h-full relative lg:overflow-hidden md:overflow-hidden items-center" style={{minHeight:isBreakPoint?"":"1000px" , borderRight:"1px solid #DCDCDC"}}>
      <div className="flex flex-col gap-5 w-full justify-center items-center">
        <p className="font-semibold text-2xl">Promo Today</p>
        <p className="font-light text-xs text-center">Coupons will be updated every weeks. Check them out!</p>
      </div>
      <div className="flex flex-col gap-6 w-11/12" style={{ overflowX:"auto"}}>
        <div className="flex lg:md-flex-col md:flex-col gap-3 flex-row ">
          {
            PromoData.length !== 0 ?
            PromoData.map((v,i) => {
              return(
                <div className="flex h-28 rounded-xl justify-around items-center "
                style={{padding:"10px", background:`${v.color}`}}
                key={i}
              >
                <div className="w-1/4 "
                  style={{height:"70px"}}
                >
                  <Image 
                  src={v.url_photo} alt='image'  
                  style={{ width: '100%', height:'100%', objectFit: "contain" }}
                  />
                </div>
                <div className="flex flex-col w-3/4 h-full"
                  style={{width: "160px"}}
                >
                  <p className="font-semibold text-sm">{v.promo_name}</p>
                  <p className="font-normal text-xs">{v.promo_desc}</p>
                </div>
              </div>
              )
            })
            :
            <h1 className="font-semibold text-sm">Promo not available</h1>
          }
        </div>
      </div>
      <div className="h-full w-full" style={{width:"240px"}}>
        <Button
          type={"second"}
          color={"brown"}
          label={"Apply Coupon"}
          sx={{minWidth:"250px"}}
        />
        </div>
      <div className="flex flex-col lg:mt-10 md:mt-10 lg:absolute md:absolute w-full" style={{bottom:"40px", padding:"24px"}}>
        <p className="font-semibold text-sm">Terms and Condition</p>
        {
          termsAndCondition.map((v,i)=>{
            return(<div className="font-light text-xs" key={i}>
              {v}
            </div>)
          })
        }
        {
          role === "admin"?
          (
            <div className="flex flex-col gap-4 mt-10 items-start">
            <button className="font-medium text-base text-primary hover:underline">
              Edit promo
            </button>
            <button className="font-medium text-base text-primary hover:underline" onClick={()=>router.push('/add-promo')}>
              Add new promo
            </button>
          </div>     
          )
          :""
        }
        
      </div>
    </div>
  );
}
