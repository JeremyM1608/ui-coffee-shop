"use client";

import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";

function str2bool(v){
    if(typeof v==="string"){
        return v.toLowerCase()==="true"?true :v.toLowerCase()==="false"?false:false
    }else return false
}
export default function UserDataEdit({handleChange, formData, setFormData,user}) {
    const [disableEdit, setDisableEdit] = useState(true);

    const handleGenderChange = (e)=>{
      setFormData({...formData, gender:e.target.value});
    }
    const checkValue = (value) => {
      if (value !== null && value !== undefined) {
        if (typeof value === 'string' && value.includes('T')) {
          return new Date(value).toISOString().split('T')[0];
        }
        return value;
      }
      return '';
    };

  return (
    <div
      className="flex flex-col gap-8 w-full h-full rounded-lg"
      style={{
        padding: "24px",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        backgroundColor: "#ffffff",
      }}
    >
      <div className="flex justify-between items-center">
        <p className="lg:text-xl md:text-xl text-lg font-semibold" style={{ color: "#4F5665" }}>
          Contacts
        </p>
        <button
          className="flex justify-center items-center hover:bg-primaryHover"
          style={{
            width: "35px",
            height: "35px",
            borderRadius: "100%",
            backgroundColor: "var(--primary)",
            boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
          }}
          onClick={()=>setDisableEdit(!disableEdit)}
        >
          <Icon
            icon={"akar-icons:pencil"}
            style={{ fontSize: "20px", color: "white" }}
          />
        </button>
      </div>
      <div className="flex flex-row gap-8">
        <div>
          <label
            htmlFor="email"
            className="block mb-2 lg:text-sm md:text-sm text-xs font-medium"
            style={{ color: "#9f9f9f" }}
          >
            Email Address :
          </label>
          <input disabled={disableEdit}
            type="email"
            id="email"
            name="email"
            value={checkValue(formData.email)}
            onChange={handleChange}
            className="block w-full h-full lg:text-sm md:text-sm text-xs"
            style={{ padding: "7px", borderBottom: "2px solid #DCDCDC", background:disableEdit?"#00000034":"", color:disableEdit?"#4A4947":"#000" }}
            required
          />
        </div>
        <div>
          <label
            htmlFor="phone_number"
            className="block mb-2 lg:text-sm md:text-sm text-xs font-medium"
            style={{ color: "#9f9f9f" }}
          >
            Phone Number :
          </label>
          <input disabled={disableEdit}
            type="tel"
            id="phone_number"
            name="phone_number"
            value={checkValue(formData.phone_number)}
            onChange={handleChange}
            className="block w-full h-full lg:text-sm md:text-sm text-xs"
            style={{ padding: "7px", borderBottom: "2px solid #DCDCDC", background:disableEdit?"#00000034":"", color:disableEdit?"#4A4947":"#000" }}
            required
          />
        </div>
      </div>
      <div className="flex flex-row">
        <div>
          <label
            htmlFor="address"
            className="block mb-2 lg:text-sm md:text-sm text-xs font-medium"
            style={{ color: "#9f9f9f" }}
          >
            Delivery Address :
          </label>
          <input disabled={disableEdit}
            type="text"
            id="address"
            name="address"
            value={checkValue(formData.address)}
            onChange={handleChange}
            className="block w-full h-full lg:text-sm md:text-sm text-xs"
            style={{ padding: "7px", borderBottom: "2px solid #DCDCDC", background:disableEdit?"#00000034":"", color:disableEdit?"#4A4947":"#000" }}
          />
        </div>
      </div>
      <p
        className="lg:text-xl md:text-xl text-lg font-semibold"
        style={{ color: "#4F5665", marginTop: "12px" }}
      >
        Details
      </p>
      <div className="flex flex-row gap-8">
        <div>
          <label
            htmlFor="username"
            className="block mb-2 lg:text-sm md:text-sm text-xs font-medium"
            style={{ color: "#9f9f9f" }}
          >
            Display Name :
          </label>
          <input disabled={disableEdit}
            type="text"
            id="username"
            name="username"
            value={checkValue(formData.username)}
            onChange={handleChange}
            className="block w-full h-full lg:text-sm md:text-sm text-xs"
            style={{ padding: "7px", borderBottom: "2px solid #DCDCDC", background:disableEdit?"#00000034":"", color:disableEdit?"#4A4947":"#000" }}
            required
          />
        </div>
        <div>
          <label
            htmlFor="birthdate"
            className="block mb-2 lg:text-sm md:text-sm text-xs font-medium"
            style={{ color: "#9f9f9f" }}
          >
            DD/MM/YY
          </label>
          <input disabled={disableEdit}
            type="date"
            id="birthdate"
            name = "birthdate"
            value={checkValue(formData.birthdate)}
            onChange={handleChange}
            className="block w-full h-full lg:text-sm md:text-sm text-xs"
            style={{ padding: "7px", borderBottom: "2px solid #DCDCDC", background:disableEdit?"#00000034":"", color:disableEdit?"#4A4947":"#000" }}
            required
          />
        </div>
      </div>
      <div className="flex flex-row gap-8">
        <div>
          <label
            htmlFor="full_name"
            className="block mb-2 lg:text-sm md:text-sm text-xs font-medium"
            style={{ color: "#9f9f9f" }}
          >
            Full Name :
          </label>
          <input disabled={disableEdit}
            type="text"
            id="full_name"
            name="full_name"
            value={checkValue(formData.full_name)}
            onChange={handleChange}
            className="block w-full h-full lg:text-sm md:text-sm text-xs"
            style={{ padding: "7px", borderBottom: "2px solid #DCDCDC", background:disableEdit?"#00000034":"", color:disableEdit?"#4A4947":"#000" }}
            required
          />
        </div>
        {/* <div>
          <label
            htmlFor="last_name"
            className="block mb-2 lg:text-sm md:text-sm text-xs font-medium"
            style={{ color: "#9f9f9f" }}
          >
            Last Name :
          </label>
          <input disabled={disableEdit}
            type="text"
            id="last_name"
            name="last_name"
            className="block w-full h-full"
            style={{ padding: "7px", borderBottom: "2px solid #DCDCDC", background:disableEdit?"#00000034":"", color:disableEdit?"#4A4947":"#000" }}
            required
          />
        </div> */}
      </div>
      <div className="flex flex-row items-center justify-center gap-3" style={{padding:"12px", borderBottom:"4px solid var(--primary)"}}>
        <div className="flex items-center gap-3">
          <input disabled={disableEdit}
            id="male"
            type="radio"
            value={"male"}
            name="default-radio"
            checked={formData?.gender === "male"}
            onChange={handleGenderChange}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="male"
            className="ms-2 lg:text-sm md:text-sm text-xs font-medium text-gray-900 dark:text-gray-300"
          >
            Male
          </label>
        </div>
        <div className="flex items-center gap-3">
          <input disabled={disableEdit}
            id="female"
            type="radio"
            value={"female"}
            name="default-radio"
            checked={formData?.gender === "female"}
            onChange={handleGenderChange}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="female"
            className="ms-2 lg:text-sm md:text-sm text-xs font-medium text-gray-900 dark:text-gray-300"
          >
            Female
          </label>
        </div>
      </div>
    </div>
  );
}
