"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import { DataProducts } from '@/_mock';
import { useRouter } from 'next/navigation';

export default function Products() {
  const [product,setProduct] = useState(DataProducts)
  const [isHover1,setIsHover1] = useState(false);
  const [isHover2,setIsHover2] = useState(false);
  const [isHover3,setIsHover3] = useState(false);
  const [isHover4,setIsHover4] = useState(false);
  const [isHover5,setIsHover5] = useState(false);

  const router = useRouter();

  const handleClickProduct = (id)=>{
    router.push(`/products/${id}`)
  }


  const handleMouseEnter1 = () => {
    setIsHover1(true);
 };
 const handleMouseLeave1 = () => {
    setIsHover1(false);
 };
 const handleMouseEnter2 = () => {
  setIsHover2(true);
};
const handleMouseLeave2 = () => {
  setIsHover2(false);
};
const handleMouseEnter3 = () => {
  setIsHover3(true);
};
const handleMouseLeave3 = () => {
  setIsHover3(false);
};
const handleMouseEnter4 = () => {
  setIsHover4(true);
};
const handleMouseLeave4 = () => {
  setIsHover4(false);
};
const handleMouseEnter5 = () => {
  setIsHover5(true);
};
const handleMouseLeave5 = () => {
  setIsHover5(false);
};

  return (
    <div className='flex lg:w-5/6 md:w-5/6 lg:h-full md:h-full h-5/6 w-full  p-10'>
      <div className='flex flex-col gap-8 items-center' style={{ width: "100%"}} >
        <div className='flex flex-wrap gap-8 cursor-pointer'
         style={{height:"70px", justifyContent:"center", alignItems:"center"}}
        >
          <div className='font-normal text-slate-500 text-sm  hover:font-bold hover:text-primary hover:text-sm hover:border-b-2' 
            style={{borderBottom:isHover1?"3px solid #6A4029":"none"}}
            onMouseEnter={handleMouseEnter1}
            onMouseLeave={handleMouseLeave1} 
          >
            Favorite & Promo
          </div>
          <div className='font-normal text-slate-500 text-sm hover:font-bold hover:text-primary hover:text-sm'
            style={{borderBottom:isHover2?"3px solid #6A4029":"none"}}
            onMouseEnter={handleMouseEnter2}
            onMouseLeave={handleMouseLeave2} 
          >
            Coffee
          </div>
          <div className='font-normal text-slate-500 text-sm hover:font-bold hover:text-primary hover:text-sm'
            style={{borderBottom:isHover3?"3px solid #6A4029":"none"}}
            onMouseEnter={handleMouseEnter3}
            onMouseLeave={handleMouseLeave3}           
          >
            Non Coffee
          </div>
          <div className='font-normal text-slate-500 text-sm hover:font-bold hover:text-primary hover:text-sm'
            style={{borderBottom:isHover4?"3px solid #6A4029":"none"}}
            onMouseEnter={handleMouseEnter4}
            onMouseLeave={handleMouseLeave4}           
          >
            Foods
          </div>
          <div className='font-normal text-slate-500 text-sm hover:font-bold hover:text-primary hover:text-sm'
            style={{borderBottom:isHover5?"3px solid #6A4029":"none"}}
            onMouseEnter={handleMouseEnter5}
            onMouseLeave={handleMouseLeave5}           
          >
            Add-on
          </div>
        </div>
        <div className='w-4/6 flex h-full gap-4 mt-10' style={{flexWrap:"wrap"}}>
          {
            product.map((v,i) => {
              return(
                <div className='flex relative rounded-xl mt-10' style={{ boxShadow:"rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px"
                  , width: "140px",
                  height:"150px",
                  marginTop:"70px",
                  cursor:"pointer"
                }}
                key={i}
                onClick={()=>handleClickProduct(v.id)}
                >
                  {
                    <Image 
                    src={v.url_photo} alt='image'  
                    style={{ width: '95px', height:'95px', objectFit: "contain", borderRadius:"100%", position:"absolute", top:"-62px", left:"25px"}}
                    />
                  }
                  {
                    v.discount?
                    <div className='font-bold text-xl bg-white h-7 flex items-center justify-center absolute rounded-3xl'
                    style={{top:"-40px", right:"0px", width:"50px"}}
                    >
                      {v.discount}
                    </div>:''
                  }
                  <div className='flex flex-col items-center justify-center'>
                    <p className='font-bold text-xl text-center'>{v.product_name}</p>
                    <p className='font-medium text-sm'>IDR {v.price}</p>
                  </div>
                </div>
              )
            })
          }
        </div>
        <div className='font-normal text-sm w-4/6 text-primary'>*the price has been cutted by discount appears</div>
        <div className="flex flex-col gap-4 mt-10">
          <button className="font-medium text-base text-primary hover:underline">
            Edit product
          </button>
          <button className="font-medium text-base text-primary hover:underline" onClick={()=>router.push('/add-product')}>
            Add new product
          </button>
        </div>   
      </div>
    </div>
  )
}
