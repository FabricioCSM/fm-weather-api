import React, { useContext, useState } from "react";
import AppContext from "../../context/AppContext";
import './styles.css';

function Header (){

  const [citySearch, setCitySearch] = useState('')
  const { currentWeatherSearch } = useContext(AppContext);

  const handleChange = ({target}) => {
    setCitySearch(target.value)
  }

  const handleSearch = (event) => {
    event.preventDefault();
    currentWeatherSearch(citySearch);
  }


  return(
    <main>
      <header className="header">
        <div style={{ display: 'flex', flexDirection: "column" }}>
          <form className="col-12" style={{width: '100%',display: 'flex', flexDirection: 'row'}}>
            <input
              type="search"
              placeholder="Insert a city and/or country"
              className="form-control form-control-dark"
              onChange={handleChange}
              aria-label="Search"
            ></input>
            <button
              className="btn btn-warning"
              onClick={ handleSearch }
            >Search</button>
          </form>
        </div>
      </header>
    </main>
  )
}

export default Header;