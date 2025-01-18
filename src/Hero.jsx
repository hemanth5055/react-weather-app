import React from 'react'
import Weimage from './Weimage'
import Tempdet from './Tempdet'
import R1comp from './R1comp'
import R2comp from './R2comp'
import { FaCircle } from "react-icons/fa";


function Hero({data}) {
    return (
        <>
        <div className='w-full mt-2  h-[60vh] rounded-lg flex relative flex-wrap max-sm:justify-center'>
            <Weimage id={data.weather.id} timezone={data.timezone}></Weimage>
            <Tempdet temp={data.main.temp} temp_max={data.main.temp_max} temp_min={data.main.temp_min} feels={data.main.feels_like}></Tempdet>
            <div className='w-[400px] flex flex-col justify-center items-center gap-10 max-sm:flex-row max-sm:w-[90%] max-sm:mt-[50px]'>
                <R1comp compData={data.wind.speed} compWind = {true}></R1comp>
                <R1comp compData={data.main.humidity} compWind = {false}></R1comp>
            </div>
        </div>
        <div className=' w-full flex justify-center items-center gap-[30px] max-sm:hidden'>
        <R2comp name="cloudiness" dataR2={data.clouds.all}></R2comp>
        <R2comp name="visibility" dataR2={data.visibility/1000}></R2comp>
        <R2comp name="winddegree" dataR2={data.wind.deg}></R2comp>
        </div>
        <div className='footer w-full flex justify-between items-center mt-[110px] px-6'>
            <div className='px-4 py-1 bg-slate-200 text-black font-mont font-semibold rounded-md items-center max-sm:text-[3vw] '><FaCircle className='inline text-red-500'/> Real Time</div>
            
            <h2 className='text-gray-500 font-mont text-[1.2vw] max-sm:text-[3vw] '>{data.name} , {data.sys.country}</h2>
        </div>
        </>
    )
}

export default Hero
