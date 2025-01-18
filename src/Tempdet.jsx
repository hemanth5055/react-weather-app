import React from 'react'

function Tempdet({temp,temp_max,temp_min,feels}) {
    function getTemperatureQuote(temperature) {
        if (temperature >= 0 && temperature < 10) {
          return "FROSTY BREEZE";
        } else if (temperature >= 10 && temperature < 20) {
          return "CRISP MORNING";
        } else if (temperature >= 20 && temperature < 30) {
          return "MILD AND PLEASANT";
        } else if (temperature >= 30 && temperature < 40) {
          return "WARM AND SUNNY";
        } else if (temperature >= 40 && temperature < 50) {
          return "HOT UNDER THE SUN";
        } else if (temperature === 50) {
          return "SCORCHING HEAT";
        } else {
          return "OUT OF RANGE"; 
        }
      }
    return (
        <div className='w-[480px]  h-full flex flex-col justify-center items-center max-sm:w-full max-sm:h-[150px]'>
            <h1 className='font-metro text-[10vw] text-white max-sm:text-[20vw]'>{temp.toFixed(0)}˚C</h1>
            <h2 className='font-metro text-[1.5vw] text-white bottom-4 relative max-sm:text-[4vw] max-sm:bottom-3'>{getTemperatureQuote(temp)}</h2>
            <h3 className='font-metro text-[1vw] text-slate-500 bottom-3 relative max-sm:text-[2vw]'>{temp_max.toFixed(2)}/{temp_min.toFixed(2)} Feels like {feels.toFixed(2)} </h3>
        </div>
    )
}

export default Tempdet
