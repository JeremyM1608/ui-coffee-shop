import { Icon } from '@iconify/react';
import React, { useEffect } from 'react';

export default function CustomSnackBar({ status, dialog, successSnackBar, setSuccessSnackBar }) {
  
  useEffect(() => {
    if (successSnackBar) {
      const timer = setTimeout(() => {
        setSuccessSnackBar(false); // Menghapus snack bar setelah 5 detik
      }, 5000); // Waktu toast 5 detik

      return () => clearTimeout(timer); // Membersihkan timer saat komponen unmount
    }
  }, [successSnackBar, setSuccessSnackBar]);

  return (
    successSnackBar && (
      <div
        className={`flex flex-row justify-between items-center text-base text-white font-normal rounded-lg
          ${status === "error" ? 'bg-red-500' : status === "success" ? 'bg-green-500': 'bg-white border border-slate-400'}`}
        style={{
          position: 'fixed',
          bottom: "20px",
          right: "15px",
          minWidth: "100px",
          maxWidth: "500px",
          minHeight: "45px",
          padding: "14px",
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          opacity: successSnackBar ? 1 : 0,
          transform: successSnackBar === true ? 'translateX(0)' : 'translateX(100%)', // animasi bergerak ke kanan
          transition: 'transform 0.5s ease-out, opacity 0.5s ease-out'
        }}
      >
        <p>{dialog}</p>
        <button
          className='flex justify-center items-center rounded-md'
          style={{ width: "32px" }}
          onClick={() => setSuccessSnackBar(false)}
        >
          <Icon icon={"iconamoon:close-bold"} className='hover:!block' style={{fontSize:"18px", color: "white" }} />
        </button>
      </div>
    )
  );
}
