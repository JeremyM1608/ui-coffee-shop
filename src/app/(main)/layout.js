import Image from 'next/image'
import React from 'react'
import img1 from '@/../public/images/loginimg.png';
import Nav from '@/components/nav/Nav';
import Footer from '@/components/Footer';
import AuthGuard from '@/guards/AuthGuard';

export default function Layout({children}) {
  return (
    <AuthGuard>
        <Nav />
            {children}
        <Footer/>
    </AuthGuard>
  )
}
