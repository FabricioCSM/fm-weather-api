import React, { useEffect, useState } from "react";
import getCountryFlag from "../services/getCountryFlag";
import getCurrentWeather from "../services/getCurrentWeather";
import AppContext from "./AppContext";

function Provider({children}) {

  const [currentWeather, setCurrentWeather] = useState();

  async function currentWeatherSearch(city){
    const data = await getCurrentWeather(city);
    const res = await data;
    setCurrentWeather(res.data)
  }

  const contextValue = {
    currentWeatherSearch,
    currentWeather,
  }

  return (
    <AppContext.Provider value={ contextValue }>
      {children}
    </AppContext.Provider>
  )
}

export default Provider