  import Button from "@/components/Button";
  import { Icon } from "@iconify/react";
  import React, { useState } from "react";

  export default function PaymentOrder({ transaction, curr, handleConfirm }) {
    const [paymentMethod, setPaymentMethod] = useState(
      transaction[curr]?.payment_method || ""
    );
    const handlePaymentMethodChange = (event) => {
      setPaymentMethod(event.target.value);
    };
    
    return (
      <div
        className="flex flex-col lg:w-1/2 md:w-1/2 w-full gap-6"
        style={{ padding: "24px" }}
      >
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
              onChange={handlePaymentMethodChange}
              checked={paymentMethod === "card"}
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
              onChange={handlePaymentMethodChange}
              checked={paymentMethod === "bank"}
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
              onChange={handlePaymentMethodChange}
              checked={paymentMethod === "cash"}
              className="w-4 h-4 textprimary bg-gray-100 border-gray-300 focus:ring-primary dark:focus:ring-primary dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
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
            type={"second"}
            color={"brown"}
            label={"Confirm and Pay"}
            sx={{ width: "100%", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
            onClick={handleConfirm}
          />
        </div>
      </div>
    );
  }
