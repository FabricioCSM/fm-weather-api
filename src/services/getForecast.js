import axios from "axios"

async function getForecast(city, days) {
  const response = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=60c155d0e39b405e93f193743222603&q=${city}&days=${days}&aqi=no&alerts=no`)
  const data = await response;
  return data
}

export default getForecast