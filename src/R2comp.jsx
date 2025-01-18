import React, { useState } from 'react'
import { IoMdCloudOutline } from "react-icons/io";
import { MdOutlineVisibility } from "react-icons/md"
import { GiWindsock } from "react-icons/gi";

function R2comp({name,dataR2}) {
    const [show,setShow] = useState(false);

    return (
        <div className='w-[65px] h-[65px] bg-white rounded-lg flex justify-center items-center relative cursor-pointer' onMouseEnter={()=>{
            setShow(true)
        }} onMouseLeave={()=>{setShow(false)}}>
        {name === "cloudiness" ? (
        <IoMdCloudOutline className='text-black text-[2vw]' />
        ) : name === "visibility" ? (
         <MdOutlineVisibility className='text-black text-[2vw]' />
        ) : (
         <GiWindsock className='text-black text-[2vw]' />
        )}
            <div className={`absolute w-full h-full bg-white rounded-lg ${!show?'hidden':''} flex justify-center items-center font-mont text-[1.2vw] font-semibold`}>
                {dataR2} {name === "cloudiness" ? ("%"
        ) : name === "visibility" ? (
         "km"
        ) : (
         "˚"
        )}
            </div>
        </div>
    )
}

export default R2comp
