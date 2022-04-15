import React, { useEffect, useState, useContext } from "react";
import AppContext from "../../context/AppContext";
import whiteHeartIcon from '../../assets/whiteHeartIcon.svg';
import blackHeartIcon from '../../assets/blackHeartIcon.svg';
import './style.css';

function Favorites(){

  const [favorite, setFavorite] = useState(false)
  const { currentWeather } = useContext(AppContext)
  const { setFavorites, favorites } = useContext(AppContext)

  useEffect(() => {
    const locals = JSON.parse(localStorage.getItem('user'));
    if(currentWeather && locals && locals.find((el) => el.location.name === currentWeather.location.name)) {
      console.log(locals, 'inicio')
      setFavorite(!favorite)
    }
  }, [favorites])

  useEffect(() => {
    const locals = JSON.parse(localStorage.getItem('user'));
    if(currentWeather && locals && locals.find((el) => el.location.name === currentWeather.location.name)) {
      console.log(locals, 'inicio')
      setFavorite(!favorite)
    }
  }, [])

  const handleFavorite = (local) => {
      const locals = JSON.parse(localStorage.getItem('user'));
      // console.log(locals, 'teste')
      if(locals) {
        if(locals.includes((element) => element.location.name === local.location.name)) {
          // console.log('passou aqui')
          setFavorite(!favorite)
          localStorage.setItem('user', JSON.stringify(locals.filter((el) => el.location.name !== local.location.name)));
          setFavorites()
        } else {
          const locals = JSON.parse(localStorage.getItem('user'));
          console.log([...locals, local])
          localStorage.setItem('user', JSON.stringify([...locals, local]));
          setFavorites()
        }
      }
      localStorage.setItem('user', JSON.stringify([local]))
    }

  return(
    <main>
      <input
          type="image"
          onClick={ () => handleFavorite(currentWeather) }
          src={ currentWeather && favorite ? blackHeartIcon : whiteHeartIcon }
          // style={isShownInfo ? {width: '70px'} : {width: '30px'}}
          alt="botao de favoritar em forma de coração"
        />
    </main>
  )
}

export default Favorites;