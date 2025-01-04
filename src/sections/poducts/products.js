"use client"

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import img from '@/../public/images/defaultProduct.jpg';
import { DataProducts } from '@/_mock';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '@/redux/slices/productSlice';
import { getProduct } from '@/api/product';

export default function Products() {
  const dispatch = useDispatch();
  const { products, status, error } = useSelector((state) => state.product);
  const page = 1;
  const role = useSelector((state) => state?.login?.user?.role);
  const [isHover1,setIsHover1] = useState(false);
  const [isHover2,setIsHover2] = useState(false);
  const [isHover3,setIsHover3] = useState(false);
  const [isHover4,setIsHover4] = useState(false);
  const [isHover5,setIsHover5] = useState(false);
  const [category, setCategory] = useState("Favorite & Promo");
  const categoryCheck = (category) => {
    switch (category) {
      case "Favorite & Promo":
        return "";
      case "Coffee":
        return "coffee";
      case "Non Coffee":
        return "non-coffee";
      case "Foods":
        return "food";
      case "Add-on":
        return "add-on";
      default:
        return "";
    }
  };
  const categoryParam = categoryCheck(category);
  useEffect(()=>{
    dispatch(fetchProducts({page, category:categoryParam}));
  },[dispatch, page, categoryParam])

  const router = useRouter();

  const handleClickProduct = (id)=>{
    router.push(`/products/${id}`)
  }

  const handleMouseEnter = (index) => {
    switch (index) {
      case 1: setIsHover1(true); break;
      case 2: setIsHover2(true); break;
      case 3: setIsHover3(true); break;
      case 4: setIsHover4(true); break;
      case 5: setIsHover5(true); break;
      default: break;
    }
  };

  const handleMouseLeave = (index) => {
    switch (index) {
      case 1: setIsHover1(false); break;
      case 2: setIsHover2(false); break;
      case 3: setIsHover3(false); break;
      case 4: setIsHover4(false); break;
      case 5: setIsHover5(false); break;
      default: break;
    }
  };
  
  return (
    <div className='flex lg:w-5/6 md:w-5/6 lg:h-full md:h-full h-5/6 w-full  p-10'>
      <div className='flex flex-col gap-8 items-center' style={{ width: "100%"}} >
      <div className='flex flex-wrap gap-8 cursor-pointer'
          style={{height:"70px", justifyContent:"center", alignItems:"center"}}
        >
          {['Favorite & Promo', 'Coffee', 'Non Coffee', 'Foods', 'Add-on'].map((categories, index) => (
            <div
              key={index}
              className={`${category === categories?"text-primary text-sm font-bold":"text-slate-500 text-sm font-normal" }font-normal hover:font-bold hover:text-primary hover:text-sm`}
              style={{ borderBottom:(category === categories || (index === 0 ? isHover1 : index === 1 ? isHover2 : index === 2 ? isHover3 : index === 3 ? isHover4 : isHover5)) ? "3px solid #6A4029" : "none" }}
              onClick={()=> setCategory(categories)}
              onMouseEnter={() => handleMouseEnter(index + 1)}
              onMouseLeave={() => handleMouseLeave(index + 1)}
            >
              {categories}
            </div>
          ))}
        </div>
        <div className='w-4/6 flex h-full gap-4 mt-10' style={{flexWrap:"wrap"}}>
          {
            status === 'loading'
            ?
            (<div className="flex flex-row gap-3 justify-center items-center h-full w-full">
                <div className="spinner"></div> {/* Your loading spinner component or CSS */}
                <p>Loading products...</p>
            </div>)
            : status === 'failed'?
              (
                <div className="flex justify-center items-center h-full w-full">
                  <div className="text-center">
                  <p className="text-yellow-500">Sorry, we couldnt find any products for this category.</p>
                  </div>
                 </div>
              )
            :
            products?.map((v, i) => {
              return (
                <div className='flex flex-col items-center justify-center relative rounded-xl mt-10'
                  style={{
                    boxShadow: "rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
                    width: "140px", height: "200px", marginTop: "70px", cursor: "pointer"
                  }}
                  key={i}
                  onClick={() => handleClickProduct(v.product_id)}
                >
                  <Image 
                    src={!v.product_url_photo ? img : process.env.NEXT_PUBLIC_BACKEND_URL + v.product_url_photo}
                    alt='image'
                    width={95}
                    height={95}
                    style={{
                      width: '95px', height: '95px', objectFit: "cover", borderRadius: "100%", position: "absolute", top: "-62px", left: "25px"
                    }}
                  />
                  {v.product_promo && (
                    <div className='font-bold text-xl bg-white h-7 flex items-center justify-center absolute rounded-3xl'
                      style={{ top: "-40px", right: "0px", width: "50px" }}
                    >
                      {v.product_promo}
                    </div>
                  )}
                  <div className='flex flex-col items-center justify-center mt-16'>
                    <p className='font-bold text-xl text-center'>{v.product_name}</p>
                    <p className='font-medium text-sm'>IDR {parseInt(v.product_price).toLocaleString('id-ID')}</p>
                  </div>
                </div>        
              )
            })
          }
        </div>
        <div className='font-normal text-sm w-4/6 text-primary'>*the price has been cutted by discount appears</div>
        {
          role === "admin"?
          (
            <div className="flex flex-col gap-4 mt-10">
              <button className="font-medium text-base text-primary hover:underline">
                Edit product
              </button>
              <button className="font-medium text-base text-primary hover:underline" onClick={()=>router.push('/add-product')}>
                Add new product
              </button>
            </div>  
          )
          :""
        }
       
      </div>
    </div>
  )
}
