import React, { useEffect, useState } from "react";
import './styles.css';

function CountryFlag({country}){

  const [flag, setFlag] = useState('');

  useEffect(() => {
    if(country !== null ) setFlag(country)
  })

  return(
    <main>
      {
       flag && (<img 
          className="flagImage"
          alt={`Bandeira do país ${country}`}
          src={`https://countryflagsapi.com/png/${country}`}
        />)
      }
    </main>
  )
}

export default CountryFlag;