import Image from 'next/image'
import React from 'react'
import img1 from '@/../public/images/loginimg.png';
import Nav from '@/components/nav/Nav';
import Footer from '@/components/Footer';

export default function Layout({children}) {
  return (
    <>
        <Nav />
            {children}
        <Footer/>
    </>
  )
}
