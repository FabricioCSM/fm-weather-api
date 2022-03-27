import React, { useEffect } from "react";
import './styles.css';

function CountryFlag({country}){

  useEffect(() => {
    if(country !== null ) console.log(country, 'country')
  })
  return(
    <main>

    </main>
  )
}

export default CountryFlag;