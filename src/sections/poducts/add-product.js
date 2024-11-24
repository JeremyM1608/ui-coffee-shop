"use client";

import Image from "next/image";
import React, { useState } from "react";
import img1 from "@/../public/images/customerImage/coldbrew.png";
import defaultImg from "@/../public/images/camera.png";
import { Icon } from "@iconify/react";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";


export default function AddProduct() {

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
          Add new product
        </div>
      </div>
      <div className="flex lg:flex-row md:flex-row flex-col w-full h-5/6">
        <div
          className="flex flex-col gap-8 lg:w-1/2 md:w-1/2"
          style={{ padding: "16px" }}
        >
          <div className="flex justify-center items-center mb-10">
            <Image
              src={img1||defaultImg}
              alt="image"
              style={{
                width: "150px",
                backgroundColor:"#DCDCDC",
                objectFit: "contain",
                borderRadius: "100%",
              }}
            />
          </div>
          <div className="flex flex-col gap-3">
          <Button
            type={"second"}
            color={"yellow"}
            label={"Take a picture"}
            icon={"lucide:camera"}
            iconSize={"24px"}
            sx={{backgroundColor:"#0B132A", color:"white"}}
            />
            <Button
            type={"second"}
            color={"yellow"}
            label={"Choose from gallery"}
            icon={"lineicons:gallery"}
            iconSize={"24px"}
            />
          </div>

          <div className="flex flex-col gap-3  mb-10">
            <p className="font-medium text-sm text-primary">Delivery Hour :</p>
            <div className="flex flex-col gap-3">
                <select
                className="block w-full h-full"
                style={{padding:"10px",borderRadius:"6px", border:"2px solid #DCDCDC", backgroundColor:"white"}}>
                    <option defaultValue="Select start hour">Select start hour</option>
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
                style={{padding:"10px",borderRadius:"6px", border:"2px solid #DCDCDC", backgroundColor:"white"}}>
                    <option defaultValue="Select end hour">Select end hour</option>
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
            <p className="font-medium text-sm text-primary">Input Stock :</p>
            <div className="flex flex-col gap-3">
                <select
                className="block w-full h-full"
                style={{padding:"10px",borderRadius:"6px", border:"2px solid #DCDCDC", backgroundColor:"white"}}>
                    <option defaultValue="input stock">input stock</option>
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
        </div>
        <div
          className="md:w-2/3 lg:w-2/3 w-full flex flex-col gap-4"
          style={{ padding: "50px" }}
        >
          <div className="mb-6">
            <label
              htmlFor="product_name"
              className="block mb-2 text-base font-medium text-gray-900 dark:text-white"
            >
              Name :
            </label>
            <input
              type="text"
              placeholder="Type product name min. 50 characters"
              id="product_name"
              name="product_name"
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
              placeholder="Type the price"
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
          <div
            className="flex flex-col gap-2 justify-center items-center"
            style={{ padding: "30px" }}
          >
            <Button
              type={"second"}
              color="brown"
              label="Save Product"
            />
            <Button
              type={"second"}
              color="yellow"
              label="Cancel"
              sx={{backgroundColor:"#DCDCDC", color:"#4F5665"}}
              onClick={()=>router.push('/products')}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
