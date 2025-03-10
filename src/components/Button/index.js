import { Icon } from '@iconify/react'
import React from 'react'

export default function Button({label, color, onClick, type, icon, iconSize, sx, disabled, buttonType}) {
    if(type === "second"){
        return (
        <button
        type={buttonType}
        disabled = {disabled}        
        className={color==="yellow" ? "flex justify-center items-center gap-4 max-w-lg min-w-80 h-11 md:h-11 bg-secondary rounded-xl font-medium lg:text-sm md:text-sm text-xs hover:bg-secondaryHover active:bg-secondaryActive text-primary shadow-slate-200 shadow-md"
            : color ==="brown" ? "flex justify-center items-center gap-4 max-w-lg min-w-80 h-11 md:h-11 bg-primary hover:bg-primaryHover rounded-xl font-medium lg:text-sm md:text-sm text-xs text-white shadow-slate-200 shadow-md"
            : "flex justify-center items-center gap-4 max-w-lg min-w-80 h-11 md:h-11 bg-white rounded-xl font-medium lg:text-sm md:text-sm text-xs hover:bg-slate-300 shadow-slate-200 shadow-md"
        }
        style={sx}
        onClick ={disabled?null:onClick}
         >
        {
            icon
            ?
            (
                <Icon icon={icon} style={{fontSize:iconSize}}/>
            )
            :
            ""
        }
        {label}
        </button>)
    } else if(type === "first"){
        return(
            <button
            disabled = {disabled}
            className={
                color==="yellow"?"w-24 h-8 md:w-36 md:h-11 bg-secondary rounded-3xl font-medium md:text-base hover:bg-secondaryHover active:bg-secondaryActive shadow-slate-200 shadow-md"
                : color === "second yellow"?'w-28 h-11 md:w-36 md:h-11  border border-secondary rounded-3xl font-medium md:text-base mb-10 hover:bg-secondary active:bg-secondaryActive text-primary shadow-slate-200 shadow-md'
                :"w-24 h-8 text-sm md:w-36 md:h-11 font-medium md:text-base hover:underline"}
            onClick={disabled?null:onClick}
            style={sx}
          >
            {label}
          </button>
        )
    }
}
