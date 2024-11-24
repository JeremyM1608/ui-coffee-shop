import { Icon } from "@iconify/react";
import React from "react";

export default function CustDialog({dialog, icon, buttonDialog,closeDialog,actionClick}) {
  return (
    <div style={{position:"fixed", zIndex:"1", left:"0", top:"0", width: "100%", height:"100%", display:"flex", alignItems:"center", justifyContent:"center",backgroundColor:"rgba(0, 0, 0, 0.4)"}}>
      <div className="flex flex-col max-w-md p-6 bg-white border border-gray-200" style={{padding:"40px",borderRadius:"10px", gap:"40px"}}>
        <div className="flex justify-around gap-4">
          {
            icon? 
            (<div className="flex justify-center items-center" style={{width:"75px",borderRadius:"100%", backgroundColor:"var(--primary)", boxShadow:"rgba(0, 0, 0, 0.1) 0px 4px 12px"}}>
            <Icon icon={"line-md:bell-alert-twotone-loop"}
            style={{fontSize:"24px", color:"white"}}
            />
          </div>): ""
          }
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {dialog} 
          </p>
        </div>
        <div className="flex justify-between gap-5">
          <button className="flex items-center justify-center rounded-lg text-sm text-primary font-medium"
          style={{minWidth:"36px", minHeight:"16px", padding:"10px",border:"2px solid var(--primary)", transition:"all .5s"}}
           onClick={closeDialog}
          >
              Cancel
          </button>
          <button className="flex items-center justify-center rounded-lg text-white bg-primary font-medium hover:bg-primaryHover"
          style={{minWidth:"36px", minHeight:"16px", padding:"10px", transition:"all .5s"}}
            onClick={actionClick}
          >
            {buttonDialog}
          </button>
        </div>
      </div>
    </div>
  );
}

