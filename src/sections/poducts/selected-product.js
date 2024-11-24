"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import defaultProduct from "@/../public/images/defaultProduct.jpg";
import { Icon } from "@iconify/react";
import Button from "@/components/Button";
import { DataProducts } from "@/_mock";
import { useRouter } from "next/navigation";

const ButtonCst = ({label,isSelected,onClick,isDeliver,productId})=>{
    return(<button
    className="text-sm text-center"               
    style={{
      padding: "7px",
      color: isSelected||isDeliver?"white":"#9F9F9F",
      background:isSelected||isDeliver?"var(--primary)":"#F4F4F8",
      fontWeight:isSelected||isDeliver?"bold":"normal",
      border: isSelected||isDeliver ?"none":"1px solid #BABABA",
      borderRadius: "4px",
      cursor: "pointer",
    }}
    onClick={onClick}
  >
    {label}
  </button>)
}

export default function SelectedProduct({productId}) {
  const [clicked, setClicked] = useState(1);
  const [isSelected, setIsSelected] = useState(0);
  const [isDeliver, setIsDeliver] = useState(true);
  const [dataProduct, setDataProduct] = useState({});
  
  const router = useRouter();

  useEffect(()=>{
    const selectedData = DataProducts.find((v)=> v.id===productId);
    if(selectedData){
      setDataProduct(selectedData)
    }
  },[productId])

  const handleClick = (e)=>{
    const value = e.target.value;

    if (value === "-" && clicked > 0) {
        setClicked(prev => prev - 1);
    } else if (value === "+") {
        setClicked(prev => prev + 1);
    }
  }
  return (
    <div className="flex flex-col p-10 gap-4">
        <div className="flex flex-row gap-2 items-center">
            <p className="text-sm font-medium cursor-pointer" style={{color:"#9F9F9F"}} onClick={()=>router.push('/products')}>Favourite & Promo</p>
            <Icon icon="ri:arrow-right-s-line" style={{color:"var(--primary)"}}/>
            <p className="text-sm font-medium text-primary cursor-pointer">{dataProduct.product_name}</p>
        </div>
      <div
        className="flex lg:flex-row md:flex-row flex-col w-full h-5/6"
      >
        <div className="flex flex-col gap-8 lg:w-1/3 md:w-1/3"
          style={{ padding: "16px" }}
        >
          <div className="flex justify-center items-center">
            <Image
              src={dataProduct.url_photo||defaultProduct}
              alt="image"
              style={{
                width: "150px",
                objectFit: "contain",
                borderRadius: "100%",
              }}
            />
          </div>
          <div
            className="flex flex-col rounded-lg shadow-lg gap-4"
            style={{
              borderRadius: "0.5rem",
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
              padding: "12px",
            }}
          >
            <p className="text-base font-bold ">Delivery and Time</p>
            <div
              className="flex flex-row gap-2"
              style={{ height: "30px" }}
            >
                <ButtonCst 
                    label={"Dine in"}
                    isSelected={isSelected===0}
                    onClick={()=> setIsSelected(0)}
                />
                <ButtonCst 
                    label={"Door Delivery"}
                    isSelected={isSelected===1}
                    onClick={()=> setIsSelected(1)}
                />
                <ButtonCst 
                    label={"Pick up"}
                    isSelected={isSelected===2}
                    onClick={()=> setIsSelected(2)}
                />
            </div>
            <div className="flex flex-row items-center gap-4">
              <p className="text-sm font-medium">Now</p>
              <div
                className=" flex flex-row gap-2"
                style={{ height: "30px" }}
              >
                <ButtonCst
                label={"Yes"}
                isDeliver={isDeliver===true}
                onClick={()=>setIsDeliver(true)}
                />
                <ButtonCst
                label={"No"}
                isDeliver={isDeliver===false}
                onClick={()=>setIsDeliver(false)}
                />
              </div>
            </div>
            <div className="flex flex-row items-center gap-4">
              <label
                htmlFor="setTime"
                className="text-sm font-medium w-1/4"
              >
                Set time
              </label>
              <input
                type="text"
                name="setTime"
                placeholder="Enter time for reservation"
                className="border border-slate-400 rounded-lg text-sm w-3/4 focus:ring-1"
                style={{
                    padding:"6px"
                }}
              />
            </div>
          </div>
        </div>
        <div className="md:w-2/3 lg:w-2/3 w-full flex flex-col gap-4" style={{padding:"50px"}}>
                <div className="text-3xl font-bold flex items-center justify-center">{dataProduct.product_name}</div>
                <div className="text-sm font-light text-primary">{dataProduct.description}</div>
                <div className="text-sm w-1/3 text-primary font-normal">
                    Delivery only on Monday to friday at 1-7 pm
                </div>
                <div className="flex justify-between items-center">
                    <div className="text-sm font-bold text-primary flex flex-row gap-2" style={{height:"35px", border:"1px solid #9F9F9F", borderRadius:"8px"}}>
                        <button className="flex justify-center items-center "
                         style={{padding:"0.5rem"}}
                         value={"-"}
                         onClick={handleClick}
                         >
                            -
                        </button>
                        <div className="flex justify-center items-center" 
                         style={{padding:"1rem", borderLeft:"1px solid #9F9F9F", borderRight:"1px solid #9F9F9F"}}>{clicked}</div>
                        <button className="flex justify-center items-center" 
                         style={{padding:"0.5rem"}}
                         value={"+"}
                         onClick={handleClick}
                         >
                            +
                        </button>
                    </div>
                    <div className="font-bold text-lg">IDR {dataProduct.price}</div>
                </div>
                <div className="flex flex-col gap-2 justify-center items-center" style={{padding:"30px"}}>
                    <Button
                    type={"second"}
                    color="brown"
                    label="Add to Cart"
                    icon="la:cart-plus"
                    iconSize="24px"
                    />
                    {/* <Button
                    type={"second"}
                    color="yellow"
                    label="Ask a Staff"
                    icon="ri:question-line"
                    iconSize="24px"
                    /> */}
                    <Button
                    type={"second"}
                    color="yellow"
                    label="Edit Product"
                    icon="lucide:edit"
                    iconSize="24px"
                    onClick={()=>router.push(`/products/${productId}/edit-product`)}
                    />
                </div>
        </div>
      </div>
      <div className="flex lg:flex-row md:flex-row flex-col w-full h-1/6 gap-3">
            <div className="flex flex-col justify-center items-center p-3 lg:w-1/2 md:w-1/2 w-full" style={{borderRadius:"10px", boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
                <p className="font-bold text-lg">Choose a size</p>
                <div className="flex flex-row gap-3">
                    <button className="font-bold text-xl bg-secondary flex items-center justify-center rounded-full w-10 h-10 hover:bg-secondaryHover">
                        R
                    </button>
                    <button className="font-bold text-xl bg-secondary flex items-center justify-center rounded-full w-10 h-10 hover:bg-secondaryHover">
                        L
                    </button>
                    <button className="font-bold text-xl bg-secondary flex items-center justify-center rounded-full w-10 h-10 hover:bg-secondaryHover">
                        XL
                    </button>
                </div>
            </div>
            <div className="flex flex-row items-center p-3 gap-2 w-full" style={{borderRadius:"10px", boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
                <div className="flex justify-center items-center w-1/3">
                    <Image
                    src={dataProduct.url_photo||defaultProduct}
                    alt="image"
                    style={{
                        width: "50px",
                        objectFit: "contain",
                        borderRadius: "100%",
                        }}
                    />
                </div>
                <div className=" flex flex-col w-1/3">
                    <p className="font-bold text-sm">{dataProduct.product_name}</p>
                    <p className="font-light text-xs">1x Large</p>
                    <p className="font-light text-xs">1x Regular</p>
                </div>
                <div className="flex flex-row gap-6 items-center w-1/3">
                    <p className="font-semibold text-sm ">Check Out</p>
                    <button className="font-bold text-xl bg-secondary flex items-center justify-center rounded-full w-10 h-10 hover:bg-secondaryHover">
                        <Icon icon="lucide:arrow-right"/>
                    </button>
                </div>
            </div>
      </div>
    </div>
  );
}
