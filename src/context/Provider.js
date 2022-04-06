import React, { useEffect, useState } from "react";
import getCountryFlag from "../services/getCountryFlag";
import getCurrentWeather from "../services/getCurrentWeather";
import getForecast from "../services/getForecast";
import AppContext from "./AppContext";

function Provider({children}) {

  const [currentWeather, setCurrentWeather] = useState();
  const [forecastWeather, setForecastWeather] = useState();

  async function currentWeatherSearch(city){
    const data = await getCurrentWeather(city);
    const res = await data;
    setCurrentWeather(res.data)
  }

  async function forecastWeatherSearch(city){
    const data = await getForecast(city);
    const res = await data;
    setForecastWeather(res.data)
  }

  const contextValue = {
    currentWeatherSearch,
    currentWeather,
    forecastWeatherSearch,
    forecastWeather,
  }

  return (
    <AppContext.Provider value={ contextValue }>
      {children}
    </AppContext.Provider>
  )
}

export default Provider