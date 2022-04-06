import React, { useContext, useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import AppContext from "../../context/AppContext";
import CountryFlag from "../CountryFlag";
import CurrentWeather from "../CurrentWeather";
import ForecastWeather from "../Forecast";
import './styles.css';

function WeatherInfo(){

  const { currentWeather } = useContext(AppContext);
  const [navCurrent, setNavCurrent] = useState(true)
  const [navForecast, setNavForecast] = useState(false)
  const [navHistory, setNavHistory] = useState(false)
  const [tabNumber, setTabNumber] = useState(0)

  useEffect(() => {
    console.log(tabNumber)
  }, [tabNumber])

  const handleClickCurrent = () => {
    setNavCurrent(true) 
    setNavForecast(false)
    setNavHistory(false)
    setTabNumber(1)
  }

  const handleClickForecast = () => {
    setNavCurrent(false) 
    setNavForecast(true)
    setNavHistory(false)
    setTabNumber(2)
  }

  const handleClickHistory = () => {
    setNavCurrent(false) 
    setNavForecast(false)
    setNavHistory(true)
    setTabNumber(3)
  }

    return(
      <main>
        <section className="presentationSearch">
          <CountryFlag country={currentWeather ? currentWeather.location.country : null}/>
          {currentWeather && (<div className="regionInfo">
            <h2 className="city">City: {currentWeather ? currentWeather.location.name : null}</h2>
            <h3 className="region">Region: {currentWeather ? currentWeather.location.region : null}</h3>
            <h3 className="country">Country: {currentWeather ? currentWeather.location.country : null}</h3>
            <h3 className="localTime">Local Time: {currentWeather ? currentWeather.location.localtime : null}</h3>
          </div>)}
        </section>
        <nav className="navLinks">
          <Nav justify variant="tabs">
            <Nav.Item>
              <Nav.Link eventKey="link-0" onClick={handleClickCurrent}>Current Weather</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-1" onClick={handleClickForecast}>Forecast 3 Days</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2" onClick={handleClickHistory}>Astronomy</Nav.Link>
            </Nav.Item>
          </Nav>
        </nav>

        <section>
          {currentWeather && navCurrent && (<CurrentWeather />)}
          {navForecast && (<ForecastWeather />)}
        </section>
      </main>
    )
}

export default WeatherInfo