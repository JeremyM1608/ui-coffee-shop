"use client"

import Image from 'next/image';
import img from '@/../public/images/editppbg.png'
import React, { useState } from 'react';
import UserProfile from './view/user-profile';
import { useDispatch, useSelector } from 'react-redux';
import defaultPP from "@/../public/images/defaultUser.jpg"
import { editProfile } from '@/redux/slices/slice';
import CustomSnackBar from '@/components/custSnackBar';
import CustDialog from '@/components/CustDialog';
import ChangePass from '@/components/modal/ChangePass';

export default function EditProfile() {
  const dispatch = useDispatch();
  const { user, status, successMessage, error } = useSelector((state) => state?.login);
  const [tempFile, setTmpFile]= useState(null);
  const [successSnackBar, setSuccessSnackBar] = useState(false);
  const [saveDialogOpen, setSaveDialogOpen] = useState(false);
  const [cpModal, setCpModal] = useState(false);
  const [formData, setFormData] = useState({
    email: user?.email,
    phone_number: user?.phone_number,
    address: user?.address,
    username: user?.username,
    birthdate: user?.birthdate,
    url_photo : user?.url_photo !== null ?`${process.env.NEXT_PUBLIC_BACKEND_URL}${user?.url_photo}` : defaultPP,
    gender : user?.gender,
    full_name: user?.full_name,
  })
  const handleChange = (e) => {
    if (e.target.type === "file") {
      const file = e.target.files[0];
      const objectURL = URL.createObjectURL(file);
      setTmpFile(file);
      setFormData((prev) => ({
        ...prev,
        url_photo: objectURL, // Simpan file gambar
      }));
    } else{
      setFormData({
        ...formData, [e.target.name] : e.target.value
       })
    }
  };

  const handleSave = async(e)=>{
    e.preventDefault();
    try {
      const newFormData = new FormData();
      newFormData.append('email', formData.email);
      newFormData.append('phone_number', formData.phone_number);
      newFormData.append('address', formData.address);
      newFormData.append('username', formData.username);
      newFormData.append('birthdate', formData.birthdate);
      if(tempFile){
        newFormData.append('url_photo', tempFile);
      }
      newFormData.append('gender', formData.gender);
      newFormData.append('full_name', formData.full_name);

      await dispatch(editProfile(newFormData));
      setTmpFile(null);
      setSuccessSnackBar(true);
    } catch (err) {
      console.log(err);
      setSuccessSnackBar(true);
    }
  }
  return (
    <div className='w-full relative' style={{height:"fit-content"}}>
        <Image src={img} alt='image'  
         style={{ width: '100%', height:'100%', objectFit: "cover" }}
        />
        <div className='flex flex-col' style={{position:"absolute",gap:"24px", width:"100%", height:"100%" , top:"0", padding:"30px 80px 30px 80px"}}>
            <p className='font-bold lg:text-3xl md:text-3xl text-2xl text-white'>User Profile</p>
            <UserProfile handleChange={handleChange} formData={formData} setFormData={setFormData} user={user} setSaveDialogOpen={setSaveDialogOpen} setCpModal={setCpModal}/>
        </div>
        {
          cpModal && (
            <ChangePass close={()=>setCpModal(false)} />
          )
        }
        {
                  status === "succeeded" && (
                      <CustomSnackBar 
                          status="success"  // success/error
                          dialog={successMessage}  // Pesan yang akan ditampilkan
                          successSnackBar={successSnackBar} 
                          setSuccessSnackBar={setSuccessSnackBar}
                      />
                  )
              }
              {
                  status === "failed" && (
                      <CustomSnackBar
                          status="error"  // success/error
                          dialog={error}  // Pesan yang akan ditampilkan
                          successSnackBar={successSnackBar} 
                          setSuccessSnackBar={setSuccessSnackBar}
                      />
                  )
              }
              {saveDialogOpen && (
                              <CustDialog
                                  dialog={"Are you sure you want to save this edit?"}
                                  closeDialog={() => setSaveDialogOpen(false)}
                                  buttonDialog={"Save"}
                                  actionClick={handleSave}
                              />
                          )}
    </div>
  )
}
