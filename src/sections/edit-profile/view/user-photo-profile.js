"use client"

import Image from 'next/image';
import img from "@/../public/images/customerImage/userpp.png";
import defaultPP from "@/../public/images/defaultUser.jpg"
import React from 'react';
import Button from '@/components/Button';
import { Icon } from '@iconify/react';
import useMediaQuery from '@/utils/use-media-query';


export default function UserPhotoProfile({handleChange, formData, setFormData, user, setSaveDialogOpen, setCpModal}) {
    const isBreakPoint = useMediaQuery(768);
  return (
    <div className=' flex flex-col items-center justify-center gap-3' style={{padding:"12px"}}>
        <Image
        src={formData?.url_photo || defaultPP}
        alt="image"
        width={120}
        height={120}
        style={{
            width: "120px",
            height: "120px",
            backgroundColor:"#DCDCDC",
            objectFit: "cover",
            borderRadius: "100%",
        }}
        />
        <div className='flex flex-col justify-center items-center gap-1'>
            <p className='font-medium text-base'>{formData.username}</p>
            <p className='font-normal text-sm'>{formData.email}</p>
        </div>
        <div className='flex flex-col gap-3'>
            <label className='cursor-pointer'>
              <input type="file" accept="image/*" hidden 
              onChange={handleChange}
              />
              <div className="flex justify-center items-center gap-4 max-w-lg min-w-80 h-11 md:h-11 lg:text-sm md:text-sm text-xs bg-secondary rounded-xl font-medium hover:bg-secondaryHover active:bg-secondaryActive text-primary shadow-slate-200 shadow-md">
                <Icon icon={"ph:images-fill"} style={{fontSize:isBreakPoint?"16px":"24px"}}/>
                Choose image from gallery
              </div>
            </label>
            <Button 
            type={"second"}
            color={"brown"}
            label={"Remove Photo"}
            />
        </div>
        <div style={{marginTop:"16px"}}>
            <Button
            type={"second"}
            label={"Edit Password"}
            onClick={()=>setCpModal(true)}
            sx={{border:"1px solid #DCDCDC"}}
            />
        </div>
        <div className='flex flex-col gap-3' style={{marginTop:"16px"}}>
            <p className='lg:text-base md:text-base text-sm font-medium text-primary text-center'>Do you want to save the change?</p>
            <div className='flex flex-col gap-3'>
                <Button 
                type={"second"}
                color={"brown"}
                label={"Save Changes"}
                onClick={()=>setSaveDialogOpen(true)}
                />
                <Button 
                type={"second"}
                color={"yellow"}
                label={"Cancel"}
                />
            </div>
            <div style={{marginTop:"16px"}}>
                <Button
                type={"second"}
                label={"Log out"}
                sx={{border:"1px solid #DCDCDC"}}
                />
            </div>
        </div>
    </div>
  )
}
