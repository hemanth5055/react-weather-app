import React from 'react'
import { FaWind } from "react-icons/fa";
import { WiRaindrops } from "react-icons/wi";

function R1comp({compWind,compData}) {
    return (
        <div className=' w-[200px] h-[60px] rounded lg flex items-center'>
            <div className='h-full w-[35%] flex justify-center items-center max-sm:items-center max-sm:pb-2
            '>
                {compWind?<FaWind className='text-white text-[2vw] max-sm:text-[5vw]'/>:<WiRaindrops className='text-white text-[6vw] max-sm:text-[12vw]' />}
            
            </div>
            <div className='w-[65%] h-full relative flex items-end max-sm:items-end max-sm:items-center'>
                <h4 className='text-gray-400 absolute top-0 left-0 font-mooli text-[0.9vw] max-sm:top-1 max-sm:text-[2vw]'>
                    {compWind?"Wind":"Humidity"}
                </h4>
                <h3 className='text-white text-[1.8vw] pb-1 font-mont font-[520] max-sm:text-[4vw]'>{compData}
                    {compWind?" MPH":" %"}
                </h3>

            </div>
        </div>
    )

}

export default R1comp
