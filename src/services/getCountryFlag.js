import axios from "axios"

async function getCountryFlag(country) {
  const response = await axios.get(``)
  console.log(response)
  const data = await response;
  return data
}

export default getCountryFlag