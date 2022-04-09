import React, { useContext, useEffect, useState } from "react";
import AppContext from "../../context/AppContext";
import Temperature from '../../assets/temperatureIcon.png';
import TermicSensation from '../../assets/termicSensation.jpg';
import Precipitation from '../../assets/precipitation.png';
import Humidity from '../../assets/humidityIcon.jpg';
import Sunrise from '../../assets/sunrise.png'
import Sunset from '../../assets/sunset.png'
import './style.css';
import WeatherImage from '../WeatherImage';

function ForecastWeather() {
  
  const { forecastWeather } = useContext(AppContext);

  return(
    <main>
      <section className="currentWeatherPageForecast">
        <h2>Forecast Tab</h2>
        <section className="cardsInfos">
          {forecastWeather && forecastWeather.forecast.forecastday.map((weatherDay, index) => {
            console.log(weatherDay)
            return (
              <section key={index}>
                <section className="dayWeatherCard">
                  <div className="weatherImageForecast">
                    <WeatherImage  weather={weatherDay.day}/>
                  </div>
                  <div>
                    <p><strong>{weatherDay.date.split("-").reverse().join("/")}</strong></p>
                  </div>
                </section>
                <div className="vl">
                  <div className="astroIcons">
                    <img className="image" src={Sunrise}/>
                    <p style={{marginRight: '20px'}}>{weatherDay.astro.sunrise}</p>
                    <img className="image" src={Sunset}/>
                    <p>{weatherDay.astro.sunset}</p>
                  </div>
                  <div className="generalInfoCondition">
                    <div className="weatherInfos">
                      <img className="weatherInfosIcon" alt="Temperature Icon" src={Temperature}/>
                      <h3 className="weatherInfoData">Max Temperature: {weatherDay.day.maxtemp_c}°C / {weatherDay.day.maxtemp_f}°F</h3>
                      <h3 className="weatherInfoData">Max Temperature: {weatherDay.day.mintemp_c}°C / {weatherDay.day.mintemp_f}°F</h3>
                    </div>
                    <div className="weatherInfos">
                      <img className="weatherInfosIcon" alt="Termic Sensation Icon" src={TermicSensation}/>
                      <h3 className="weatherInfoData">Thermal sensation: {weatherDay.day.feelslike_c}°C / {weatherDay.day.feelslike_f}°F</h3>
                    </div>
                    <div className="weatherInfos">
                      <img className="weatherInfosIcon" alt="Humidity" src={Humidity}/>
                      <h3 className="weatherInfoData">Humidity: {weatherDay.day.avghumidity} %</h3>
                    </div>
                    <div className="weatherInfos">
                      <img className="weatherInfosIcon" alt="Precipitation Icon" src={Precipitation}/>
                      <h3 className="weatherInfoData">Precipitation: {weatherDay.day.totalprecip_mm} mm</h3>
                    </div>
                  </div>
                </div>
               
              </section>
            )
          })}
        </section>
      </section>
    </main>
  )
}

export default ForecastWeather;