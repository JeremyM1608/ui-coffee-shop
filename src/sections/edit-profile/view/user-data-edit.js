"use client";

import { Icon } from "@iconify/react";
import React, { useState } from "react";

function str2bool(v){
    if(typeof v==="string"){
        return v.toLowerCase()==="true"?true :v.toLowerCase()==="false"?false:false
    }else return false
}
export default function UserDataEdit() {
    const [isMale, setIsMale] = useState(false);

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
        <p className="text-xl font-semibold" style={{ color: "#4F5665" }}>
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
            className="block mb-2 text-sm font-medium"
            style={{ color: "#9f9f9f" }}
          >
            Email Address :
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="block w-full h-full"
            style={{ padding: "7px", borderBottom: "2px solid #DCDCDC" }}
            required
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block mb-2 text-sm font-medium"
            style={{ color: "#9f9f9f" }}
          >
            Phone Number :
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            pattern="\+?([ -]?\d+)+|\(\d+\)([ -]\d+)"
            className="block w-full h-full"
            style={{ padding: "7px", borderBottom: "2px solid #DCDCDC" }}
            required
          />
        </div>
      </div>
      <div className="flex flex-row">
        <div>
          <label
            htmlFor="address"
            className="block mb-2 text-sm font-medium"
            style={{ color: "#9f9f9f" }}
          >
            Delivery Address :
          </label>
          <input
            type="text"
            id="address"
            name="address"
            className="block w-full h-full"
            style={{ padding: "7px", borderBottom: "2px solid #DCDCDC" }}
          />
        </div>
      </div>
      <p
        className="text-xl font-semibold"
        style={{ color: "#4F5665", marginTop: "12px" }}
      >
        Details
      </p>
      <div className="flex flex-row gap-8">
        <div>
          <label
            htmlFor="display_name"
            className="block mb-2 text-sm font-medium"
            style={{ color: "#9f9f9f" }}
          >
            Display Name :
          </label>
          <input
            type="text"
            id="display_name"
            name="display_name"
            className="block w-full h-full"
            style={{ padding: "7px", borderBottom: "2px solid #DCDCDC" }}
            required
          />
        </div>
        <div>
          <label
            htmlFor="birthday"
            className="block mb-2 text-sm font-medium"
            style={{ color: "#9f9f9f" }}
          >
            DD/MM/YY
          </label>
          <input
            type="date"
            id="birthday"
            className="block w-full h-full"
            style={{ padding: "7px", borderBottom: "2px solid #DCDCDC" }}
            required
          />
        </div>
      </div>
      <div className="flex flex-row gap-8">
        <div>
          <label
            htmlFor="first_name"
            className="block mb-2 text-sm font-medium"
            style={{ color: "#9f9f9f" }}
          >
            First Name :
          </label>
          <input
            type="text"
            id="first_name"
            name="first_name"
            className="block w-full h-full"
            style={{ padding: "7px", borderBottom: "2px solid #DCDCDC" }}
            required
          />
        </div>
        <div>
          <label
            htmlFor="last_name"
            className="block mb-2 text-sm font-medium"
            style={{ color: "#9f9f9f" }}
          >
            Last Name :
          </label>
          <input
            type="text"
            id="last_name"
            name="last_name"
            className="block w-full h-full"
            style={{ padding: "7px", borderBottom: "2px solid #DCDCDC" }}
            required
          />
        </div>
      </div>
      <div className="flex flex-row items-center justify-center gap-3" style={{padding:"12px", borderBottom:"4px solid var(--primary)"}}>
        <div className="flex items-center gap-3">
          <input
            id="male"
            type="radio"
            value={true}
            name="default-radio"
            checked={isMale}
            onChange={(e)=>setIsMale(str2bool(e.target.value))}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="male"
            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Male
          </label>
        </div>
        <div className="flex items-center gap-3">
          <input
            id="female"
            type="radio"
            value={false}
            name="default-radio"
            checked={!isMale}
            onChange={(e)=>setIsMale(str2bool(e.target.value))}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="female"
            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Female
          </label>
        </div>
      </div>
    </div>
  );
}
