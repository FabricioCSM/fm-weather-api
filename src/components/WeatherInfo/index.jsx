import React, { useContext, useState } from "react";
import { Nav } from "react-bootstrap";
import AppContext from "../../context/AppContext";
import CountryFlag from "../CountryFlag";
import CurrentWeather from "../CurrentWeather";
import './styles.css';

function WeatherInfo(){

  const { currentWeather } = useContext(AppContext);
  const [firstNav, setFirstNav] = useState(false)

  const handleClickNav = () => {
    setFirstNav(true) 
  }

    return(
      <main>
        <CountryFlag country={currentWeather ? currentWeather.location.country : null}/>
        <nav>
          <Nav justify variant="tabs">
            <Nav.Item>
              <Nav.Link onClick={handleClickNav}>Current Weather</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-1">Forecast 3 Days</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2">Astronomy</Nav.Link>
            </Nav.Item>
          </Nav>
        </nav>

        {firstNav && (<CurrentWeather />)}
      </main>
    )
}

export default WeatherInfo