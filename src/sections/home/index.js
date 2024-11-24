import Footer from '@/components/Footer'
import FifthHome from '@/components/homeComponent/FifthHome'
import FirstHome from '@/components/homeComponent/FirstHome'
import FourthHome from '@/components/homeComponent/FourthHome'
import SecondHome from '@/components/homeComponent/SecondHome'
import ThirdHome from '@/components/homeComponent/ThirdHome'
import Nav from '@/components/nav/Nav'
import React from 'react'

export default function Home() {
  return (
    <>
    <Nav/>
        <FirstHome/>
        <SecondHome/>
        <ThirdHome />
        <FourthHome />
        <FifthHome />
    <Footer/>
  </>
  )
}
