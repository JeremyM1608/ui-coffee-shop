"use client"

import { Icon } from '@iconify/react';
import React from 'react';
import Chart from "react-apexcharts";


export default function MonthlyReport() {
  return (
        <div className='flex flex-col gap-3 w-full lg:w-4/5 md:w-4/5 rounded-lg' style={{padding:"24px", boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
            <div className='flex flex-row justify-between items-center lg:text-3xl md:text-3xl text-xl font-bold text-black'>
                <p>Monthly Report</p>
                <Icon icon={"humbleicons:dots-horizontal"} className='lg:text-3xl md:text-3xl text-xl font-bold text-black'/>
            </div>
            <p className='font-normal text-sm' style={{color:"#7C828A"}}>15 April - 20 April</p>
            <div>
                <Chart
                    type="bar"
                    height={400}
                    width= "100%"
                    series={[
                        {
                            name:"Income",
                            data:["3.2", "4", "4.9", "3.8", "4.5", "4.2"],
                            color:"#FFBA33"
                        },
                        {
                            name:"Outcome",
                            data:["-1", "-1.2", "-1.3", "-2", "-1.4", "-1"],
                            color:"#6A4029"
                        }
                    ]}
                    options={{
                        plotOptions:{
                            bar:{
                                horizontal:false,
                                borderRadius:2,
                                borderRadiusApplication: 'around',
                                borderRadiusWhenStacked: 'all',
                                columnWidth:"20%",
                                barHeight: 100,
                            }
                        },
                        stroke: {
                            colors: ["transparent"],
                            width: 10
                        },
                        dataLabels: {
                            enabled: false
                        },
                        chart:{
                            stacked:true,
                        },
                        xaxis:{
                            categories:['15','16','17','18','19', '20']
                        },
                        yaxis:{
                            stepSize: 1,
                        },
                        tooltip:{
                            y:["-2","0","3","5"]
                        }
                    }}
                />
            </div>
        </div>
  )
}
