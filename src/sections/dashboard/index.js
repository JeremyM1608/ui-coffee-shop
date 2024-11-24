import React from 'react'
import HeadDashboard from './view/HeadDashboard'
import Pagination from './view/Pagination'
import MonthlyReport from './view/MonthlyReport'
import Goals from './view/Goals'

export default function Dashboard() {
  return (
    <div className='flex flex-col gap-10' style={{width:"100%", height:"100%", padding:"40px"}}>
        <HeadDashboard />
        <div className='flex flex-col' style={{gap:"28px"}}>
            <Pagination />
            <div className='flex lg:flex-row md:flex-row flex-col gap-3'>
                <MonthlyReport />
                <Goals/>
            </div>
            <div className='flex flex-row gap-3'>
              <button className='flex justify-center items-center bg-primary hover:bg-primaryHover rounded-xl font-medium text-xl text-white shadow-slate-200 shadow-md'
              style={{height:"50px", width:"80%"}}
              >
                  Download Report
              </button>
              <button className=' flex justify-center items-center bg-primary hover:bg-primaryHover rounded-xl font-medium text-xl text-white shadow-slate-200 shadow-md'
              style={{height:"50px", width:"20%"}}
              >
                  Share Report
              </button>
           </div>
        </div>
    </div>
  )
}
