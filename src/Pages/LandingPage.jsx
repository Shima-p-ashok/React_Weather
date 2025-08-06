import React, { useState } from 'react'
import Button from '@mui/material/Button';
import './LandingPage.css'

function LandingPage() {

  //To perform inputbox and button
  const location=(event)=>{
    const value = event.target.value;
    setPlace(value)
    console.log(value); 
  }

  const btnclick = ()=>{
    fetchData();
    
  }

   //Create Array for holding state values
  const [place, setPlace]=useState('')
  const [wthr, setWeather]=useState('')

  //Define BaseURL
  const baseUrl = `https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=cc8c96e18386908f18df0603a94f2690&units=metric`;


   
  //Define function for API fetching

  const fetchData=async()=>{
    const response = await fetch(baseUrl)
    console.log(response);
    const res = await response.json()
    setWeather(res) 
       
  }
  console.log(wthr); 
  
  
  return (
    <div>
      <section id='bg'>
         <div className="row">
        <div className="col-4"></div>
        <div className="col-4 shadow border rounded text-center p-3 my-5 bg-light">
          <h4>Check the Weather</h4>
          <label htmlFor="" className='pt-4'>City : </label>
          <input onChange={(e=>location(e))} type="text" placeholder='Enter city name' /><br /><br />
          <Button onClick={btnclick} sx={{backgroundColor:'rgb(32, 126, 126)'}} variant="contained">Check Weather</Button><br /><br />
           {wthr && (
                        <div className="p-3">
                            <h4>Location : {wthr.name}, {wthr.sys.country}</h4>
                            <h5>Weather: {wthr.weather[0].description}</h5>
                            <h5>Temperature: {wthr.main.temp} °C</h5>
                            <h5>Humidity: {wthr.main.humidity} %</h5>
                            <h5>Wind speed: {wthr.wind.speed} kph</h5>
                        </div>
                    )}
        </div>
        <div className="col-4"></div>
      </div>
      </section>
     
    </div>
  )
}

export default LandingPage
