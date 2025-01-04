import React from 'react'
import UserPhotoProfile from './user-photo-profile'
import UserDataEdit from './user-data-edit'

export default function UserProfile({handleChange, formData, setFormData, user, setSaveDialogOpen, setCpModal}) {
  return (
    <div className='flex lg:flex-row md:flex-row flex-col w-full rounded-lg gap-3' style={{padding:"24px", boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px", backgroundColor:"#F8F8F8", overflow:"auto"}}>
        <UserPhotoProfile handleChange={handleChange} formData={formData} setFormData={setFormData} user={user} setCpModal={setCpModal} setSaveDialogOpen={setSaveDialogOpen} />
        <UserDataEdit handleChange={handleChange} formData={formData} setFormData={setFormData} user={user}/>
    </div>
  )
}
