"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import img1 from '@/../public/images/defaultProduct.jpg';
import { Icon } from "@iconify/react";
import Button from "@/components/Button";
import CustDialog from "@/components/CustDialog";
import { DataProducts } from "@/_mock";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, editProduct } from "@/redux/slices/productSlice";
import CustomSnackBar from "@/components/custSnackBar";

export default function EditProduct({productId}) {
  const dispatch = useDispatch();
  
  const { products, status, error, successMessage } = useSelector((state) => state.product);
  const [tempFile, setTmpFile]= useState(null);
  const [clicked, setClicked] = useState(1);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [saveDialogOpen, setSaveDialogOpen]= useState(false);
  const [successSnackBar, setSuccessSnackBar] = useState(false);
  const [formData, setFormData] = useState({
      name: "",
      description: "",
      price: "",
      url_photo: null,
      qty: 1,
      type_id :"",
      promo:"",
      size_id: [], // Ukuran disimpan dalam array
      delivery_method_id: [],
    });
  const router = useRouter();

  useEffect(() => {
    // Fetch product data from the store or API based on productId
    const product = products.find((prod) => prod.product_id === parseInt(productId));
    if (product) {
      setFormData({
        name: product.product_name,
        description: product.product_description,
        price: product.product_price,
        url_photo: product.product_url_photo !== null ?`${process.env.NEXT_PUBLIC_BACKEND_URL}${product.product_url_photo}` : img1,
        qty: product.product_qty,
        type_id: product.product_type_id,
        promo: product.product_promo,
        size_id: product.product_size_id.split(',') || [],
        delivery_method_id: product.product_delivery_method_id.split(',') || [],
      });
    } 
  }, [productId, products]);

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
  const handleChange = (e) => {
    if (e.target.type === "file") {
      const file = e.target.files[0];
      const objectURL = URL.createObjectURL(file);
      setTmpFile(file);
      setFormData((prev) => ({
        ...prev,
        url_photo: objectURL, // Simpan file gambar
      }));
    } else{
      setFormData({
        ...formData, [e.target.name] : e.target.value
       })
    }
  };
  const handleQtyClick = (e) => {
    const value = e.target.value;
  
    // Ubah formData.qty berdasarkan tombol yang diklik
    setFormData((prevFormData) => {
      let newQty = prevFormData.qty;
  
      if (value === "-" && newQty > 0) {
        newQty = parseInt(newQty) - 1; // Kurangi qty jika tombol "-" diklik
      } else if (value === "+") {
        newQty = parseInt(newQty) + 1; // Tambah qty jika tombol "+" diklik
      }
  
      // Kembalikan formData dengan qty yang diperbarui
      return {
        ...prevFormData,
        qty: newQty.toString(), // pastikan qty tetap dalam format string
      };
    });
  };

  const handleDeleteProduct = () => {
    // Dispatch the deleteProduct action
    dispatch(deleteProduct(productId))
      .then(() => {
        // After deletion, navigate back to the products list or perform any other logic
        router.replace('/products');
      })
      .catch((err) => {
        console.error("Failed to delete product:", err);
      });
    setDeleteDialogOpen(false);
  };

  const handleSubmit = async(e)=>{
    e.preventDefault();
    try {
      const newFormData = new FormData();
      newFormData.append('name',formData.name);
      newFormData.append('description',formData.description);
      newFormData.append('price',formData.price);
      if(tempFile){
        newFormData.append('url_photo', tempFile);
      }
      newFormData.append('qty',formData.qty);
      newFormData.append('type_id',formData.type_id);
      newFormData.append('promo',formData.promo);
      newFormData.append('size_id',formData.size_id.join());
      newFormData.append('delivery_method_id',formData.delivery_method_id.join());
      await dispatch(editProduct({id:parseInt(productId), payload:newFormData}));
      setSuccessSnackBar(true);
      setTmpFile(null);
      router.replace('/products');
    } catch (err) {
      console.log(err);
      setSuccessSnackBar(true);
    }
  }

  return (
    <div className="flex flex-col p-10 gap-4">
      <div className="flex flex-row gap-2 items-center">
        <p className="text-sm font-medium cursor-pointer" style={{ color: "#9F9F9F" }}
        onClick={()=>router.push('/products')}
        >
          Favourite & Promo
        </p>
        <Icon icon="ri:arrow-right-s-line" style={{ color: "var(--primary)" }} />
        <p className="text-sm font-medium text-primary cursor-pointer" onClick={()=>router.back()}>{formData.name}</p>
        <Icon icon="ri:arrow-right-s-line" style={{ color: "var(--primary)" }} />
        <p className="text-sm font-medium text-primary cursor-pointer">Edit Product</p>
      </div>
      <div className="flex lg:flex-row md:flex-row flex-col w-full h-5/6">
        <div
          className="flex flex-col gap-8 lg:w-1/3 md:w-1/3"
          style={{ padding: "16px" }}
        >
          <div className="flex flex-col gap-3 items-center" style={{ width: "100%", height: "100%", position: "relative" }}>
            <Image
              src={formData.url_photo || img1}
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
            <button
              className="flex justify-center items-center hover:bg-greyHover"
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "100%",
                backgroundColor: "white",
                border: "4px solid var(--secondary)",
                position: "absolute",
                top: "5px",
                right: "76px",
                boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
              }}
              onClick={()=>setDeleteDialogOpen(true)}
            >
              <Icon
                icon={"lucide:trash-2"}
                style={{ fontSize: "24px", color: "var(--primary)" }}
              />
            </button>
            <Button
            type={"second"}
            color={"yellow"}
            label={"Take a picture"}
            icon={"lucide:camera"}
            iconSize={"24px"}
            sx={{backgroundColor:"#0B132A", color:"white"}}
            />
            <label>
              <input type="file" accept="image/*" hidden 
              onChange={handleChange}
              />
              <div className="flex justify-center items-center gap-4 max-w-lg min-w-80 h-11 md:h-11 bg-secondary rounded-xl font-medium md:text-sm hover:bg-secondaryHover active:bg-secondaryActive text-primary shadow-slate-200 shadow-md">
                <Icon icon={"ph:images-fill"} style={{fontSize:"24px"}}/>
                Choose image from gallery
              </div>
            </label>
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
              htmlFor="name"
              className="block mb-2 text-3xl font-bold text-gray-900 dark:text-white"
            >
              Product Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
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
              value={formData.price}
              onChange={handleChange}
              className="block w-full h-full"
              style={{padding:"10px", borderBottom:"2px solid #DCDCDC"}}
            />
          </div>
          <div className="mb-6">
            <textarea
              className="block w-full h-full"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows='3'
              placeholder="Write your product descriptions"
              style={{padding:"10px", borderBottom:"2px solid #DCDCDC"}}
            />
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
          <div className="flex flex-col gap-3 mb-10">
            <div className="flex flex-row gap-3 mb-5">
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
            </div>
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
            </div>
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
                onClick={handleQtyClick}
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
                {formData.qty}
              </div>
              <button
                className="flex justify-center items-center"
                style={{ padding: "0.5rem" }}
                value={"+"}
                onClick={handleQtyClick}
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
      {deleteDialogOpen && (
                <CustDialog
                    dialog={"Are you sure you want to delete this product?"}
                    closeDialog={() => setDeleteDialogOpen(false)}
                    buttonDialog={"Delete"}
                    icon
                    actionClick={handleDeleteProduct}
                />
            )}
      {saveDialogOpen && (
                <CustDialog
                    dialog={"Are you sure you want to save this edit?"}
                    closeDialog={() => setSaveDialogOpen(false)}
                    buttonDialog={"Save"}
                    actionClick={handleSubmit}
                />
            )}
    </div>
  );
}
