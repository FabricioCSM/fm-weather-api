import React, { useContext, useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import AppContext from "../../context/AppContext";
import CountryFlag from "../CountryFlag";
import './styles.css';

function CurrentWeather(){

  const { currentWeather } = useContext(AppContext);

  useEffect(() => {
    console.log(currentWeather)
  }, [currentWeather])

    return(
      <main>
        {/* {console.log(currentWeather)} */}
      </main>
    )
}

export default CurrentWeather