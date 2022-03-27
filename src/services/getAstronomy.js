import axios from "axios"

async function getAstronomy(city,date) {
  const response = await axios.get(`http://api.weatherapi.com/v1/astronomy.json?key=60c155d0e39b405e93f193743222603&q=${city}&dt=${date}`)
  const data = await response;
  return data
}

export default getAstronomy