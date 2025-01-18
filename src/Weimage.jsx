import React from 'react'
function Weimage({id,timezone}) {
    function getWeatherCondition(code) {
        if (code >= 200 && code < 300) {
          return "Thunder";
        } else if (code >= 500 && code < 600) {
          return "Rain";
        } else if (code >= 600 && code < 700) {
          return "Snow";
        }  else {
          return "DayNight";
        }
      }
      function getDayPeriod() {
        // Get the current UTC time
        const now = new Date();
        const utcHours = now.getUTCHours();
        const utcMinutes = now.getUTCMinutes();
        const utcSeconds = now.getUTCSeconds();
    
        // Convert UTC time to total seconds
        const totalUtcSeconds = utcHours * 3600 + utcMinutes * 60 + utcSeconds;
    
        // Add the timezone offset to get local time in seconds
        const localTimeInSeconds = (totalUtcSeconds + timezone) % (24 * 3600);
    
        // Define morning and night ranges in seconds
        const MORNING_START = 6 * 3600; // 6:00 AM
        const NIGHT_START = 18 * 3600;   // 6:00 PM
    
        // Determine if it's morning or night based on local time
        if (localTimeInSeconds >= MORNING_START && localTimeInSeconds < NIGHT_START) {
            return "Morning";
        } else {
            return "Night";
        }
    }
    
    return (
        <div className='w-[480px]  h-full relative flex flex-col justify-center items-center max-sm:w-full max-sm:h-[220px]'>
           <div className='w-[92%] h-[50%]  bg-cloud bg-no-repeat bg-contain z-[5]  max-sm:w-[90%]  max-sm:h-[75%]'>
           </div>
           {getWeatherCondition(id)=="DayNight"? getDayPeriod()=="Morning"?(<div className='w-[180px] h-[230px] absolute top-[70px] right-[30%] bg-sun bg-no-repeat bg-contain max-sm:w-[100px] max-sm:h-[140px] max-sm:top-0'></div>):(<div className='w-[180px] h-[230px] absolute top-[50px] right-[30%] bg-moon bg-no-repeat bg-contain max-sm:w-[100px] max-sm:h-[140px] max-sm:top-0'></div>) : 
           getWeatherCondition(id)=="Rain"?(
<div className='w-[150px] h-[200px] absolute bottom-[-23px] bg-rain bg-no-repeat bg-contain'></div>): getWeatherCondition(id)=="Snow"?(
    <div className='w-[150px] h-[200px] absolute bottom-[-23px] bg-snow bg-no-repeat bg-contain'></div>):(
<div className='w-[150px] h-[200px] absolute bottom-[-23px] bg-thunder bg-no-repeat bg-contain'></div>)
           }

        </div>
    )
}

export default Weimage

