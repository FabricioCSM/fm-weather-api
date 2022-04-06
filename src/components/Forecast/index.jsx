import React, { useContext, useEffect, useState } from "react";
import AppContext from "../../context/AppContext";
import Temperature from '../../assets/temperatureIcon.png';
import TermicSensation from '../../assets/termicSensation.jpg';
import Precipitation from '../../assets/precipitation.png';
import Humidity from '../../assets/humidityIcon.jpg';
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
              <>
                <section key={index} className="dayWeatherCard">
                  <div className="weatherImageForecast">
                    <WeatherImage  weather={weatherDay.day}/>
                  </div>
                  <div>
                    <p>{weatherDay.date.split("-").reverse().join("/")}</p>
                  </div>
                </section>
                <div class="vl"></div>
              </>
            )
          })}
        </section>
      </section>
    </main>
  )
}

export default ForecastWeather;