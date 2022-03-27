import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import WeatherInfo from "../../components/WeatherInfo";

function Home () {

  return (
    <main>
      <Header />
      <WeatherInfo />
      <Footer />
    </main>
  )
}

export default Home