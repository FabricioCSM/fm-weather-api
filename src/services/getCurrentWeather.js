import axios from "axios"
import getCountryFlag from "./getCountryFlag";

async function getCurrentWeather(city) {
  const response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=60c155d0e39b405e93f193743222603&q=${city}&aqi=no`)
  const data = await response;
  return data
}

export default getCurrentWeather