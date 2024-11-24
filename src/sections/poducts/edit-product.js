"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import img1 from "@/../public/images/customerImage/bg-history-img.png";
import { Icon } from "@iconify/react";
import Button from "@/components/Button";
import CustDialog from "@/components/CustDialog";
import { DataProducts } from "@/_mock";
import { useRouter } from "next/navigation";

// {
//   id: "1002",
//   url_photo: hazelnut,
//   product_name: "Hazelnut Latte",
//   price: "25.000",
//   description: "Kombinasi kopi espresso dengan susu dan sirup hazelnut yang manis, memberikan rasa lembut dan kaya."
// },

export default function EditProduct({productId}) {
  const [dataProduct, setDataProduct] = useState({});
  const [clicked, setClicked] = useState(1);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [saveDialogOpen, setSaveDialogOpen]= useState(false);
  const router = useRouter();

  useEffect(()=>{
    const selectedData = DataProducts.find((v)=> v.id===productId);
    if(selectedData){
      setDataProduct(selectedData)
    }
  },[productId])

  const handleClick = (e) => {
    const value = e.target.value;

    if (value === "-" && clicked > 0) {
      setClicked((prev) => prev - 1);
    } else if (value === "+") {
      setClicked((prev) => prev + 1);
    }
  };
  return (
    <div className="flex flex-col p-10 gap-4">
      <div className="flex flex-row gap-2 items-center">
        <p className="text-sm font-medium cursor-pointer" style={{ color: "#9F9F9F" }}
        onClick={()=>router.push('/products')}
        >
          Favourite & Promo
        </p>
        <Icon icon="ri:arrow-right-s-line" style={{ color: "var(--primary)" }} />
        <p className="text-sm font-medium text-primary cursor-pointer" onClick={()=>router.back()}>{dataProduct.product_name}</p>
        <Icon icon="ri:arrow-right-s-line" style={{ color: "var(--primary)" }} />
        <p className="text-sm font-medium text-primary cursor-pointer">Edit Product</p>
      </div>
      <div className="flex lg:flex-row md:flex-row flex-col w-full h-5/6">
        <div
          className="flex flex-col gap-8 lg:w-1/3 md:w-1/3"
          style={{ padding: "16px" }}
        >
          <div style={{ width: "100%", height: "100%", position: "relative" }}>
            <Image
              src={img1}
              alt="image"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
            <button
              className="flex justify-center items-center hover:bg-greyHover"
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "100%",
                backgroundColor: "white",
                border: "4px solid var(--secondary)",
                position: "absolute",
                top: "20px",
                right: "20px",
                boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
              }}
              onClick={()=>setDeleteDialogOpen(true)}
            >
              <Icon
                icon={"lucide:trash-2"}
                style={{ fontSize: "24px", color: "var(--primary)" }}
              />
            </button>
          </div>
          <div className="text-sm w-4/6 text-primary font-normal">
            Delivery only on Monday to friday at 1-7 pm
          </div>
        </div>
        <div
          className="md:w-2/3 lg:w-2/3 w-full flex flex-col gap-4"
          style={{ padding: "50px" }}
        >
          <div className="mb-6">
            <label
              htmlFor="product_name"
              className="block mb-2 text-3xl font-bold text-gray-900 dark:text-white"
            >
              Product Name
            </label>
            <input
              type="text"
              id="product_name"
              name="product_name"
              className="block w-full h-full"
              style={{padding:"10px", borderBottom:"2px solid #DCDCDC"}}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="price"
              className="block mb-2 text-xl font-semibold text-gray-900 dark:text-white"
            >
              Product Price
            </label>
            <input
              type="text"
              id="price"
              name="price"
              className="block w-full h-full"
              style={{padding:"10px", borderBottom:"2px solid #DCDCDC"}}
            />
          </div>
          <div className="mb-6">
            <textarea
              className="block w-full h-full"
              name="descriptions"
              placeholder="Write your product descriptions"
              style={{padding:"10px", borderBottom:"2px solid #DCDCDC"}}
            />
          </div>
          <div className="flex flex-col gap-3 mb-6">
            <select
            className="block w-full h-full"
            style={{padding:"10px",borderRadius:"6px", border:"2px solid #DCDCDC", backgroundColor:"white"}}>
                <option defaultValue="Select Size">Select Size</option>
                <option value="reguler">R</option>
                <option value="l">L</option>
                <option value="xl">XL</option>
                <option value="250gr">250gr</option>
                <option value="300gr">300gr</option>
                <option value="500gr">500gr</option>
            </select>
            <select
            className="block w-full h-full"
            style={{padding:"10px",borderRadius:"6px", border:"2px solid #DCDCDC", backgroundColor:"white"}}>
                <option defaultValue="Select Delivery Methods">Select Delivery Methods</option>
                <option value="home_delivery">Home Delivery</option>
                <option value="dine_in">Dine in</option>
                <option value="take_away">Take Away</option>
            </select>
          </div>
          <div className="flex justify-between items-center gap-3">
            <div
              className="text-sm font-bold text-primary flex flex-row gap-2"
              style={{
                height: "35px",
                border: "1px solid #DCDCDC",
                borderRadius: "4px",
              }}
            >
              <button
                className="flex justify-center items-center "
                style={{ padding: "0.5rem" }}
                value={"-"}
                onClick={handleClick}
              >
                -
              </button>
              <div
                className="flex justify-center items-center"
                style={{
                  padding: "1rem",
                  borderLeft: "1px solid #DCDCDC",
                  borderRight: "1px solid #DCDCDC",
                }}
              >
                {clicked}
              </div>
              <button
                className="flex justify-center items-center"
                style={{ padding: "0.5rem" }}
                value={"+"}
                onClick={handleClick}
              >
                +
              </button>
            </div>
            <Button
              type={"second"}
              color="yellow"
              label="Add to Cart"
              icon="la:cart-plus"
              iconSize="24px"
            />
          </div>
          <div
            className="flex flex-col gap-2 justify-center items-center"
            style={{ padding: "30px" }}
          >
            <Button
              type={"second"}
              color="brown"
              label="Save Product"
              icon="lucide:save"
              iconSize="24px"
              onClick={()=>setSaveDialogOpen(true)}
            />
          </div>
        </div>
      </div>
      {deleteDialogOpen && (
                <CustDialog
                    dialog={"Are you sure you want to delete this product?"}
                    closeDialog={() => setDeleteDialogOpen(false)}
                    buttonDialog={"Delete"}
                    icon
                />
            )}
      {saveDialogOpen && (
                <CustDialog
                    dialog={"Are you sure you want to save this edit?"}
                    closeDialog={() => setSaveDialogOpen(false)}
                    buttonDialog={"Save"}
                />
            )}
    </div>
  );
}
