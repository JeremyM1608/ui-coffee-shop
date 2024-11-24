import Image from 'next/image';
import img from "@/../public/images/customerImage/userpp.png";
import defaultPP from "@/../public/images/defaultUser.jpg"
import React from 'react';
import Button from '@/components/Button';


export default function UserPhotoProfile() {
  return (
    <div className=' flex flex-col items-center justify-center gap-3' style={{padding:"12px"}}>
        <Image
        src={img || defaultPP}
        alt="image"
        style={{
            width: "120px",
            backgroundColor:"#DCDCDC",
            objectFit: "contain",
            borderRadius: "100%",
        }}
        />
        <div className='flex flex-col justify-center items-center gap-1'>
            <p className='font-medium text-base'>Zulaikha</p>
            <p className='font-normal text-sm'>zulaikha17@gmail.com</p>
        </div>
        <div className='flex flex-col gap-3'>
            <Button 
            type={"second"}
            color={"yellow"}
            label={"Choose Photo"}
            />
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
            sx={{border:"1px solid #DCDCDC"}}
            />
        </div>
        <div className='flex flex-col gap-3' style={{marginTop:"16px"}}>
            <p className='text-base font-medium text-primary text-center'>Do you want to save the change?</p>
            <div className='flex flex-col gap-3'>
                <Button 
                type={"second"}
                color={"brown"}
                label={"Save Changes"}
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
