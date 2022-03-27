import React, { useContext, useEffect, useState } from "react";
import AppContext from "../../context/AppContext";
import SunnyIcon from '../../assets/Sunny-icon.png';
import ClearNightIcon from '../../assets/clearMoon.png';
import CloudySunIcon from '../../assets/partlyCloud.png';
import CloudyNightIcon from '../../assets/cloudyMoon.png';
import RainIcon from '../../assets/rain.png';
import RainThunder from '../../assets/overcastThunder.png';
import CloudyIcon from '../../assets/cloudy.png';
import ToRainIcon from '../../assets/overcast.png';
import './style.css';

function WeatherImage (){

const { currentWeather } = useContext(AppContext);
const [imageType, setImageType] = useState();
const [weatherImage, setWeatherImage] = useState()

useEffect(() => {
  if(currentWeather) {
    setImageType(currentWeather.current.condition.code)
  }
  handleImage(imageType)
  console.log(handleImage(imageType))
}, [imageType, currentWeather])

const handleImage = (imageType) => {
  if(+imageType === 1000 && currentWeather.current.is_day === 1) return setWeatherImage(SunnyIcon);
  if(+imageType === 1000 && currentWeather.current.is_day === 0) return setWeatherImage(ClearNightIcon);
  if(+imageType === 1003 && currentWeather.current.is_day === 1) return setWeatherImage(CloudySunIcon);
  if(+imageType === 1003 && currentWeather.current.is_day === 0) return setWeatherImage(CloudyNightIcon);
  if(+imageType === 1006 || +imageType === 1030 || +imageType === 1035 || +imageType === 1047) return setWeatherImage(CloudyIcon);
  if(+imageType === 1009) return setWeatherImage(ToRainIcon);
  if(+imageType === 1087) return setWeatherImage(RainThunder);
  else return setWeatherImage(RainIcon);
}

  return(
    <main >
      <img
      className="weatherIcon"
        alt={`${weatherImage}`}
        src={weatherImage}
      />
    </main>
  )
}

export default WeatherImage;