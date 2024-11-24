"use client";

import Image from "next/image";
import React, { useState } from "react";
import defaultImg from "@/../public/images/spaghetti.png";
import { Icon } from "@iconify/react";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";
import CustDialog from "@/components/CustDialog";


export default function EditPromo() {
  const [saveDialogOpen, setSaveDialogOpen]= useState(false);
  const router = useRouter();
  return (
    <div className="flex flex-col p-10 gap-4">
      <div className="flex flex-row gap-2 items-center">
        <div
          className="text-sm font-medium cursor-pointer"
          style={{ color: "#9F9F9F" }}
          onClick={()=>router.push('/products')}
        >
          Favourite & Promo
        </div>
        <Icon
          icon="ri:arrow-right-s-line"
          style={{ color: "var(--primary)" }}
        />
        <div className="text-sm font-medium text-primary cursor-pointer">
          Edit promo
        </div>
      </div>
      <div className="flex lg:flex-row md:flex-row flex-col w-full h-5/6">
        <div
          className="flex flex-col gap-8 lg:w-1/2 md:w-1/2"
          style={{ padding: "16px" }}
        >
          <div className="flex flex-col gap-3 mb-10 justify-center bg-secondary rounded-lg" style={{height:"75%",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
            <div className="flex flex-col items-center gap-3" style={{position:"relative",borderBottom:"2px dashed black", padding:"16px", width:"100%"}}>
                <Image
                src={defaultImg}
                alt="image"
                style={{
                   
                    width: "150px",
                    backgroundColor:"#DCDCDC",
                    objectFit: "contain",
                    borderRadius: "100%",
                }}
                />
                <button className="flex justify-center items-center hover:bg-primaryHover" style={{width:"30px",height:"30px",borderRadius:"100%",backgroundColor:"var(--primary)",color:"white", position:"absolute", bottom:"150px", right: "130px"}}>
                    <Icon icon={"line-md:pencil"} className="text-sm"/>
                </button>
                <div className="flex flex-col items-center font-semibold">
                    <h1 className="text-3xl">Beef Spaghetti</h1>
                    <h2 className="text-lg">20% OFF</h2>
                </div>
                <div className="text-base font-normal" style={{width:"55%"}}>
                    <h1>Buy 1 Choco Oreo and get 20% off for Beef Spaghetti</h1>
                </div>
            </div>
            <div className="flex flex-col items-center gap-3">
                <h1 className="text-base font-normal">COUPON CODE</h1>
                <h1 className="text-3xl font-extrabold">FNPR15RG</h1>
                <p className="text-sm font-normal">Valid until October 10th 2020</p>
            </div>
          </div>
          <div className="flex flex-col gap-3  mb-10">
            <label htmlFor="expire_date" className="font-medium text-sm text-primary">Expire date :</label>
            <div className="flex flex-col gap-3">
                <select
                className="block w-full h-full"
                id="expire_date"
                name="start_expire_date"
                style={{padding:"10px",borderRadius:"6px", border:"2px solid #DCDCDC", backgroundColor:"white"}}>
                    <option disabled defaultValue="Select start date">Select start date</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                </select>
                <select
                className="block w-full h-full"
                id="expire_date"
                name="end_expire_date"
                style={{padding:"10px",borderRadius:"6px", border:"2px solid #DCDCDC", backgroundColor:"white"}}>
                    <option disabled defaultValue="Select end date">Select end date</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                </select>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="coupon_code" className="font-medium text-sm text-primary">Input coupon code :</label>
            <div className="flex">
            <input
              type="text"
              id="coupon_code"
              name="coupon_code"
              className="block w-full h-full"
              style={{padding:"10px", borderBottom:"2px solid #DCDCDC"}}
            />
            </div>
          </div>
        </div>
        <div
          className="md:w-2/3 lg:w-2/3 w-full flex flex-col gap-4"
          style={{ padding: "50px" }}
        >
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block mb-2 text-base font-medium text-gray-900 dark:text-white"
            >
              Name :
            </label>
            <input
              type="text"
              placeholder="Type product name min. 50 characters"
              id="name"
              name="name"
              className="block w-full h-full"
              style={{padding:"10px", borderBottom:"2px solid #DCDCDC"}}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="price"
              className="block mb-2 text-base font-medium text-gray-900 dark:text-white"
            >
              Price :
            </label>
            <input
              type="text"
              placeholder="Type the normal price"
              id="price"
              name="price"
              className="block w-full h-full"
              style={{padding:"10px", borderBottom:"2px solid #DCDCDC"}}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="description"
              className="block mb-2 text-base font-medium text-gray-900 dark:text-white"
            >
              Descriptions :
            </label>
            <input
              type="text"
              placeholder="Describe your product min. 150 characters"
              id="description"
              name="description"
              className="block w-full h-full"
              style={{padding:"10px", borderBottom:"2px solid #DCDCDC"}}
            />
          </div>
          <div className="flex flex-col gap-3">
            <div className="text-base font-medium text-primary">Input product size :</div>
            <div className="text-sm font-normal text-slate-400">Click size you want to use for this product</div>
            <div className="flex flex-row gap-3">
                    <button 
                    className="font-bold text-xl bg-secondary flex items-center justify-center rounded-full w-10 h-10 hover:bg-secondaryHover"
                    >
                        R
                    </button>
                    <button 
                    className="font-bold text-xl bg-secondary flex items-center justify-center rounded-full w-10 h-10 hover:bg-secondaryHover"
                    >
                        L
                    </button>
                    <button 
                    className="font-bold text-xl bg-secondary flex items-center justify-center rounded-full w-10 h-10 hover:bg-secondaryHover"
                    >
                        XL
                    </button>
                    <button 
                    className="font-medium text-xs flex items-center justify-center rounded-full w-10 h-10 p-3"
                    style={{backgroundColor:"#DCDCDC", color:"#4F5665"}}
                    >
                        250 gr
                    </button>
                    <button 
                    className="font-medium text-xs flex items-center justify-center rounded-full w-10 h-10 p-3"
                    style={{backgroundColor:"#DCDCDC", color:"#4F5665"}}
                    >
                        300 gr
                    </button>
                    <button 
                    className="font-medium text-xs flex items-center justify-center rounded-full w-10 h-10 p-3"
                    style={{backgroundColor:"#DCDCDC", color:"#4F5665"}}
                    >
                        500 gr
                    </button>
                </div>
          </div>
          <div className="flex flex-col gap-3">
                <div className="text-base font-medium text-primary">Input delivery methods :</div>
                <div className="text-sm font-normal text-slate-400">Click methods you want to use for this product</div>
                <div className="flex fle-row gap-3">
                    <button className="rounded-md text-sm font-medium text-primary items-center justify-center bg-secondary"
                    style={{width:"150px", height:"40px"}}
                    >
                        Home Delivery
                    </button>
                    <button className="rounded-md text-sm font-medium text-primary items-center justify-center bg-secondary"
                    style={{width:"150px", height:"40px"}}
                    >
                        Dine in
                    </button>
                    <button className="rounded-md text-sm font-medium text-primary items-center justify-center bg-secondary"
                    style={{width:"150px", height:"40px"}}
                    >
                        Take Away
                    </button>
                </div>
          </div>
          <div className="flex flex-col gap-3  mb-10">
              <label htmlFor="discount" className="font-medium text-sm text-primary">Enter the discount :</label>
              <select
                className="block w-full h-full"
                id="discount"
                name="discount"
                style={{padding:"10px",borderRadius:"6px", border:"2px solid #DCDCDC", backgroundColor:"white"}}>
                    <option defaultValue="Input discount">Enter the discount</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="30">30</option>
                    <option value="40">40</option>
                    <option value="50">50</option>
                    <option value="60">60</option>
                    <option value="70">70</option>
                </select>
          </div>
          <div
            className="flex flex-col gap-2 justify-center items-center"
            style={{ padding: "30px" }}
          >
            <Button
              type={"second"}
              color="brown"
              label="Save Promo"
              onClick={()=>setSaveDialogOpen(true)}
            />
          </div>
        </div>
      </div>
      {saveDialogOpen && (
        <CustDialog
            dialog={"Are you sure you want to save this promo?"}
            closeDialog={() => setSaveDialogOpen(false)}
            buttonDialog={"Save"}
        />
      )}
    </div>
  );
}
