import React, { useContext, useEffect, useState } from "react";
import AppContext from "../../context/AppContext";
import WeatherImage from '../WeatherImage';
import Temperature from '../../assets/temperatureIcon.png';
import TermicSensation from '../../assets/termicSensation.jpg';
import Precipitation from '../../assets/precipitation.png';
import Humidity from '../../assets/humidityIcon.jpg';
import './styles.css';

function CurrentWeather(){

  const { currentWeather } = useContext(AppContext);

  useEffect(() => {
    console.log(currentWeather)
  }, [currentWeather])

    return(
      <main>
        <section className="currentWeatherPage">
          <div className="weatherImage">
            <WeatherImage  weather={currentWeather.current}/>
            <h3 className="weatherConditionText">{currentWeather.current.condition.text}</h3>
            <br/>
          </div>
          <div className="generalInfoCondition">
            <div className="weatherInfos">
              <img className="weatherInfosIcon" alt="Temperature Icon" src={Temperature}/>
              <h3>Temperature: {currentWeather.current.temp_c}°C / {currentWeather.current.temp_f}°F</h3>
            </div>
            <div className="weatherInfos">
              <img className="weatherInfosIcon" alt="Termic Sensation Icon" src={TermicSensation}/>
              <h3>Thermal sensation: {currentWeather.current.feelslike_c}°C / {currentWeather.current.feelslike_f}°F</h3>
            </div>
            <div className="weatherInfos">
              <img className="weatherInfosIcon" alt="Humidity" src={Humidity}/>
              <h3>Humidity: {currentWeather.current.humidity} %</h3>
            </div>
            <div className="weatherInfos">
              <img className="weatherInfosIcon" alt="Precipitation Icon" src={Precipitation}/>
              <h3>Precipitation: {currentWeather.current.precip_mm} mm</h3>
            </div>
          </div>
        </section>
      </main>
    )
}

export default CurrentWeather