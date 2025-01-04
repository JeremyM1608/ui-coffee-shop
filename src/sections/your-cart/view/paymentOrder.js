"use client";

import Button from "@/components/Button";
import { Icon } from "@iconify/react";
import React from "react";

export default function PaymentOrder({
  onClick,
  transactionData,
  setTransactionData,
  cart,
}) {
  const handleChange = (e) => {
    setTransactionData((prev) => ({
      ...prev,
      payment_method: e.target.value,
    }));
  };
  return (
    <div
      className="flex flex-col lg:w-1/2 md:w-1/2 w-full gap-6"
      style={{ padding: "24px" }}
    >
      <div className="flex justify-between items-center">
        <p
          className="font-semibold text-white text-lg"
          style={{ textShadow: "4px 4px 2px rgba(0,0,0,0.6)" }}
        >
          Address detail
        </p>
        <button className="font-medium text-white text-sm">edit</button>
      </div>
      <div
        className="flex flex-col w-full rounded-lg bg-white gap-2"
        style={{
          padding: "34px",
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        }}
      >
        <div
          className="text-sm font-normal p-3"
          style={{ borderBottom: "1px solid #DCDCDC" }}
        >
          Delivery to Iskandar Street
        </div>
        <div
          className="text-sm font-normal p-3"
          style={{ borderBottom: "1px solid #DCDCDC" }}
        >
          Km 5 refinery road oppsite re public road, effurun, Jakarta
        </div>
        <div
          className="text-sm font-normal p-3"
          style={{ borderBottom: "1px solid #DCDCDC" }}
        >
          +62 81348287878
        </div>
      </div>
      <div>
        <p
          className="font-semibold text-white text-lg"
          style={{ textShadow: "4px 4px 2px rgba(0,0,0,0.6)" }}
        >
          Payment Method
        </p>
      </div>
      <div
        className="flex flex-col w-full rounded-lg bg-white gap-2"
        style={{
          padding: "34px",
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        }}
      >
        <div
          className="flex items-center p-3 gap-2"
          style={{ borderBottom: "1px solid #DCDCDC" }}
        >
          <input
            id="credit_card"
            type="radio"
            value="card"
            name="list-radio"
            onChange={handleChange}
            checked = {transactionData === "card"}
            className="w-4 h-4 text-primary bg-gray-100 border-gray-300 focus:ring-primary dark:focus:ring-primary dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
          />
          <div
            className="text-base text-white flex items-center justify-center rounded-md"
            style={{
              width: "30px",
              height: "30px",
              padding: "4px",
              background: "#F47B0A",
            }}
          >
            <Icon icon="mingcute:bank-card-fill" />
          </div>
          <label
            htmlFor="credit_card"
            className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Card
          </label>
        </div>
        <div
          className="flex items-center p-3 gap-2"
          style={{ borderBottom: "1px solid #DCDCDC" }}
        >
          <input
            id="bank_account"
            type="radio"
            value="bank"
            name="list-radio"
            onChange={handleChange}
            checked = {transactionData === "bank"}
            className="w-4 h-4 text-primary bg-gray-100 border-gray-300 focus:ring-primary dark:focus:ring-primary dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
          />
          <div
            className="bg-primary text-base text-white flex items-center justify-center rounded-md"
            style={{ width: "30px", height: "30px", padding: "4px" }}
          >
            <Icon icon="mingcute:bank-fill" />
          </div>
          <label
            htmlFor="bank_account"
            className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Bank Account
          </label>
        </div>
        <div
          className="flex items-center p-3 gap-2"
          style={{ borderBottom: "1px solid #DCDCDC" }}
        >
          <input
            id="cash_on_delivery"
            type="radio"
            value="cash"
            name="list-radio"
            onChange={handleChange}
            checked = {transactionData === "cash"}
            className="w-4 h-4 text-primary bg-gray-100 border-gray-300 focus:ring-primary dark:focus:ring-primary dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
          />
          <div
            className="text-base text-black flex items-center justify-center rounded-md"
            style={{
              width: "30px",
              height: "30px",
              padding: "4px",
              background: "#FFBA33",
            }}
          >
            <Icon icon="mdi:cash-on-delivery" />
          </div>
          <label
            htmlFor="cash_on_delivery"
            className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Cash on Delivery
          </label>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <Button
          disabled={cart.length > 0 ? false : true}
          type={"second"}
          color={"brown"}
          label={"Confirm and Pay"}
          sx={{ width: "100%", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
          onClick={onClick}
        />
      </div>
    </div>
  );
}
