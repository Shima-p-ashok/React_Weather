import React, { useState } from 'react'
import Button from '@mui/material/Button';
import './LandingPage.css'

function LandingPage() {
  const [place, setPlace] = useState('')
  const [wthr, setWeather] = useState('')

  const baseUrl = `https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=cc8c96e18386908f18df0603a94f2690&units=metric`;

  const location = (event) => {
    setPlace(event.target.value)
  }

  const btnclick = () => {
    fetchData();
  }

  const fetchData = async () => {
    const response = await fetch(baseUrl)
    const res = await response.json()
    setWeather(res)
  }

  return (
    <div>
      <section id="bg">
        <video autoPlay muted loop playsInline id="bg-video">
          <source src="https://cdn.pixabay.com/video/2024/05/29/214409_tiny.mp4" type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>

       
        <div className="overlay d-flex justify-content-center align-items-center min-vh-100">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-md-8 col-lg-6">
                <div className="shadow border rounded text-center p-4 bg-light bg-opacity-75">
                  <h4 className="mb-3">Check the Weather</h4>

                  <div className="mb-3 text-start">
                    <label className="form-label">City :</label>
                    <input 
                      onChange={location} 
                      type="text" 
                      className="form-control" 
                      placeholder="Enter city name" 
                    />
                  </div>

                  <Button 
                    onClick={btnclick} 
                    sx={{ backgroundColor: 'oklch(37.9% 0.146 265.522)' }} 
                    variant="contained" 
                    fullWidth
                  >
                    Check Weather
                  </Button>

                  {wthr && wthr.weather && (
                    <div className="mt-4">
                      <img
                        src={`https://openweathermap.org/img/wn/${wthr.weather[0].icon}@2x.png`}
                        alt={wthr.weather[0].description}
                        style={{ width: '80px', height: '80px' }}
                      />
                      <h4>Location : {wthr.name}, {wthr.sys.country}</h4>
                      <h5>Weather: {wthr.weather[0].description}</h5>
                      <h5>Temperature: {wthr.main.temp} °C</h5>
                      <h5>Humidity: {wthr.main.humidity} %</h5>
                      <h5>Wind speed: {wthr.wind.speed} kph</h5>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LandingPage
