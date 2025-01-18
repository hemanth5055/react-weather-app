import React, { useEffect, useState } from 'react'
import { FiSearch } from "react-icons/fi";
import Hero from './Hero';
import { ThreeDot } from 'react-loading-indicators';
function App() {
  const [data,setData] = useState();
  const [render,setRender] = useState(false);
  const [loading,setLoading] = useState(true);
  const [city,setCity] = useState("")
  useEffect(() => {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Amaravathi&appid=40a492d531002279f04d2ed95c492306&units=metric')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
        setLoading(false);
        setRender(true);
      })
      .catch((error) => console.error('Error fetching weather data:', error));
  }, []);
  function formatDate() {
    const today = new Date();
    
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    const formattedDate = today.toLocaleDateString('en-US', options);
    
    return formattedDate;
  }
  function getData(){
    setLoading(true);
    setTimeout(() => {
      if (city.length>0) {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=40a492d531002279f04d2ed95c492306&units=metric`)
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        if (data.cod == 200) {
          setData(data)
        }
        else{
          alert("city Not Found !")
        }
      })
      .catch((error) => console.error('Error fetching weather data:', error));
    }
    }, 1000);
  }
  return (
    <><div className='w-full h-screen absolute bg p-6 max-sm:p-2 max-sm:pt-4 '>
      <div className='w-full p-2 flex justify-between items-center flex-wrap max-sm:justify-center max-sm:gap-[20px]'>
        <h3 className='font-mont font-semibold text-[2vw] text-white max-sm:text-[5vw]'>{formatDate()}</h3>
        <div className='w-[370px] h-[40px] relative flex items-center justify-center max-sm:w-[100%]'>
          <div className='h-full w-[70px] flex justify-start items-center  max-sm:w-[20%] max-sm:hidden'>
            {loading ? <ThreeDot color="#fff" size="small" text="" /> : ''}
          </div>
          <input type="text" value={city} className='w-[300px] h-[40px] px-4 text-[1.3vw] rounded-full text-slate-900 font-mont outline-none max-sm:text-[4vw] max-sm:w-[100%]' onChange={(e) => {
            setCity(e.target.value);
          } } />
          <div className='absolute pr-[10px] h-[40px] w-[40px] right-0 top-0 flex justify-center pl-3 items-center rounded-full font-bold max-sm:right-0 bg-black' onClick={() => getData()}>
            <FiSearch className='text-white'/>
          </div>
        </div>
      </div>

      {render ? <Hero data={data}></Hero> : ''}
    </div>
    </>
  )
}

export default App
