"use client";

import Image from "next/image";
import React, { useState } from "react";
import img1 from "@/../public/images/customerImage/coldbrew.png";
import defaultImg from "@/../public/images/camera.png";
import { Icon } from "@iconify/react";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";
import CustomSnackBar from "@/components/custSnackBar";
import { addProduct } from "@/redux/slices/productSlice";
import { useDispatch, useSelector } from "react-redux";


export default function AddProduct() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { status, error, successMessage } = useSelector(state => state.product);

  const [successSnackBar, setSuccessSnackBar] = useState(false);
  const [isError, setIsError] = useState('');

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    url_photo: null,
    qty: "",
    type_id :"",
    promo:"",
    size_id: [], // Ukuran disimpan dalam array
    delivery_method_id: [],
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData((prev) => ({
        ...prev,
        url_photo: files[0], // Simpan file gambar
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value, // Simpan data form lainnya
      }));
    }
  };

  const handleSizeChange = (size) => {
    let newSize = "";
    switch (size) {
      case "R":
        newSize = "1"; // R -> 1
        break;
      case "L":
        newSize = "2"; // L -> 2
        break;
      case "XL":
        newSize = "3"; // XL -> 3
        break;
      default:
        newSize = "";
    }

    setFormData((prev) => {
      const sizeExists = prev.size_id.includes(newSize);
      if (sizeExists) {
        return {
          ...prev,
          size_id: prev.size_id.filter((s) => s !== newSize), // Hapus ukuran jika sudah ada
        };
      } else {
        return {
          ...prev,
          size_id: [...prev.size_id, newSize], // Tambah ukuran jika belum ada
        };
      }
    });
  };
  const handleDeliveryMethodChange = (dm) => {
    let newDm = "";
    switch (dm) {
      case "Dine in":
        newDm = "1"; // R -> 1
        break;
      case "Take away":
        newDm = "2"; // L -> 2
        break;
      case "Home Delivery":
        newDm = "3"; // XL -> 3
        break;
      default:
        newDm = "";
    }

    setFormData((prev) => {
      const dmExists = prev.delivery_method_id.includes(newDm);
      if (dmExists) {
        return {
          ...prev,
          delivery_method_id: prev.delivery_method_id.filter((dm) => dm !== newDm), // Hapus ukuran jika sudah ada
        };
      } else {
        return {
          ...prev,
          delivery_method_id: [...prev.delivery_method_id, newDm], // Tambah ukuran jika belum ada
        };
      }
    });
  };
  const handleSubmit = async(e)=>{
    e.preventDefault();
    try {
      const newFormData = new FormData();
      newFormData.append('name',formData.name);
      newFormData.append('description',formData.description);
      newFormData.append('price',formData.price);
      newFormData.append('url_photo',formData.url_photo);
      newFormData.append('qty',formData.qty);
      newFormData.append('type_id',formData.type_id);
      newFormData.append('promo',formData.promo);
      newFormData.append('size_id',formData.size_id.join());
      newFormData.append('delivery_method_id',formData.delivery_method_id.join());

      await dispatch(addProduct(newFormData));

      setSuccessSnackBar(true);
      setIsError('');
      setFormData({
        name: "",
        description: "",
        price: "",
        url_photo: null,
        qty: "",
        type_id :"",
        promo:"",
        size_id: [], // Ukuran disimpan dalam array
        delivery_method_id: [],
      })
    } catch (error) {
      console.log(error);
      setIsError(error.response || 'Unauthorized');
      setSuccessSnackBar(true);  // Menampilkan snackbar error
    }
  }

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
              src={formData.url_photo ? URL.createObjectURL(formData.url_photo) : defaultImg}
              alt="image"
              width={150}
              height={150}
              style={{
                width:"150px",
                height:"150px",
                backgroundColor:"#DCDCDC",
                objectFit: "cover",
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
            <label>
              <input type="file" accept="image/*" hidden onChange={handleChange}/>
              <div className="flex justify-center items-center gap-4 max-w-lg min-w-80 h-11 md:h-11 bg-secondary rounded-xl font-medium md:text-sm hover:bg-secondaryHover active:bg-secondaryActive text-primary shadow-slate-200 shadow-md">
                <Icon icon={"ph:images-fill"} style={{fontSize:"24px"}}/>
                Choose image from gallery
              </div>
            </label>
          </div>
          <div className="flex flex-col gap-3 mb-3">
            <p className="font-medium text-sm text-primary">Select Product Type:</p>
            <div className="flex flex-col gap-3">
                <select
                name="type_id"
                value={formData.type_id}
                onChange={handleChange}
                className="block w-full h-full"
                style={{padding:"10px",borderRadius:"6px", border:"2px solid #DCDCDC", backgroundColor:"white"}}>
                    <option value="">Select product type</option>
                    <option value="1">Food</option>
                    <option value="2">Coffee</option>
                    <option value="3">Non Coffee</option>
                    <option value="4">add-on</option>
                </select>
            </div>
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
                name="qty"
                value={formData.qty}
                onChange={handleChange}
                className="block w-full h-full"
                style={{padding:"10px",borderRadius:"6px", border:"2px solid #DCDCDC", backgroundColor:"white"}}>
                    <option value="">input stock</option>
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
              value={formData.name}
              onChange={handleChange}
              className="block w-full h-full"
              style={{padding:"10px", borderBottom:"2px solid #DCDCDC"}}
              required
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
              type="number"
              placeholder="Type the price"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="block w-full h-full"
              style={{padding:"10px", borderBottom:"2px solid #DCDCDC"}}
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="description"
              className="block mb-2 text-base font-medium text-gray-900 dark:text-white"
            >
              Descriptions :
            </label>
            <textarea
              placeholder="Describe your product min. 150 characters"
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows='3'
              className="block w-full h-full"
              style={{padding:"10px", borderBottom:"2px solid #DCDCDC"}}
              required
            />
          </div>
          <div className="flex flex-col gap-3">
            <div className="text-base font-medium text-primary">Input product size :</div>
            <div className="text-sm font-normal text-slate-400">Click size you want to use for this product</div>
            <div className="flex flex-row gap-3">
                    {["R", "L", "XL"].map((size) => (
                      <button
                        type="button"
                        key={size}
                        className={`font-bold text-xl flex items-center justify-center rounded-full w-10 h-10 hover:bg-secondaryHover ${
                          formData.size_id.includes(size === "R" ? "1" : size === "L" ? "2" : "3") ? "text-black" : ""
                        }`}
                        style={{backgroundColor:formData.size_id.includes(size === "R" ? "1" : size === "L" ? "2" : "3")? "#FFBA33" : "#DCDCDC"}}
                        onClick={() => handleSizeChange(size)}
                      >
                        {size}
                      </button>
                    ))}
                    {/* <button 
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
                    </button> */}
                </div>
          </div>
          <div className="flex flex-col gap-3">
                <div className="text-base font-medium text-primary">Input delivery methods :</div>
                <div className="text-sm font-normal text-slate-400">Click methods you want to use for this product</div>
                <div className="flex fle-row gap-3">
                    {['Home Delivery', 'Dine in', 'Take away'].map((dm)=>(
                      <button className="rounded-md text-sm font-medium items-center justify-center"
                      key={dm}
                      style={{width:"150px", height:"40px", backgroundColor:formData.delivery_method_id.includes(dm === "Dine in" ? "1" : dm === "Take away" ? "2" : "3")?"#FFBA33" : "#DCDCDC", color:formData.delivery_method_id.includes(dm === "Dine in" ? "1" : dm === "Take away" ? "2" : "3")?"var(--primary)":"#4F5665"}}
                      onClick={() => handleDeliveryMethodChange(dm)}
                      >
                          {dm}
                      </button>
                    ))}
                    {/* <button className="rounded-md text-sm font-medium text-primary items-center justify-center bg-secondary"
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
                    </button> */}
                </div>
          </div>
            {/* Error Display */}
            {isError && (
                    <div className='flex p-3 items-center bg-red-500 w-5/6 rounded-md shadow-slate-200 shadow-md'>
                        <p className='text-base font-medium text-white'>{isError}</p>
                    </div>
                )}

                {/* SnackBar (Toast) */}
                {
                    status === "succeeded" && (
                        <CustomSnackBar 
                            status="success"  // success/error
                            dialog={successMessage}  // Pesan yang akan ditampilkan
                            successSnackBar={successSnackBar} 
                            setSuccessSnackBar={setSuccessSnackBar}
                        />
                    )
                }
                {
                    status === "failed" && (
                        <CustomSnackBar 
                            status="error"  // success/error
                            dialog={error}  // Pesan yang akan ditampilkan
                            successSnackBar={successSnackBar} 
                            setSuccessSnackBar={setSuccessSnackBar}
                        />
                    )
                }
          <div
            className="flex flex-col gap-2 justify-center items-center"
            style={{ padding: "30px" }}
          >
            <button
            className="flex justify-center items-center gap-4 max-w-lg min-w-80 h-11 md:h-11 bg-primary hover:bg-primaryHover rounded-xl font-medium md:text-sm text-white shadow-slate-200 shadow-md"
            onClick={handleSubmit}
            >
              Save Product
            </button>
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
