import React, { useEffect, useState, useContext } from "react";
import AppContext from "../../context/AppContext";
import './styles.css';

function CountryFlag({country}){

  const [favorite, setFavorite] = useState(false)
  const { currentWeather } = useContext(AppContext)
  const { setFavorites, favorites } = useContext(AppContext)

  // useEffect(() => {
  //   const locals = JSON.parse(localStorage.getItem('user'));
  //   if(locals && locals.find((el) => el.id === movie.id)) setFavorite(!favorite)
  // }, [favorites])

  const handleFavorite = (local) => {
      const locals = JSON.parse(localStorage.getItem('user'));
      if(!locals.find((el) => el.location.name === local.location.name)){
        setFavorite(!favorite)
        localStorage.setItem('user', JSON.stringify([...locals, local]))
        setFavorites()
      }
      else {
        const locals = JSON.parse(localStorage.getItem('user'));
        setFavorite(!favorite);
        localStorage.setItem('user', JSON.stringify(locals.filter((el) => el.id !== local.location.name)));
        setFavorites()
      }
    }

  return(
    <main>
      <input
          type="image"
          onClick={ () => handleFavorite(currentWeather) }
          // src={ favorite ? blackHeartIcon : whiteHeartIcon }
          // style={isShownInfo ? {width: '70px'} : {width: '30px'}}
          alt="botao de favoritar em forma de coração"
        />
    </main>
  )
}

export default CountryFlag;