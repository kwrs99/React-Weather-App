import React, { useState } from "react";
import Current from "./Current";
import Forecast from "./Forecast";
import "./App.css";

import axios from "axios";

export default function Search(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      city: response.data.name,
      temperature: response.data.main.temp,

      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      date: new Date(response.data.dt * 1000),
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    searchWeather();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function searchWeather() {
    let apiKey = "b400ae3b711a616262d18b0ca2cbe78f";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(url).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="Search">
        <form id="search-form" onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Enter a city..."
            onChange={updateCity}
            className="search"
            id="search-input"
            autoComplete="off"
          />
          <button type="submit" value="Search" id="search-button">
            Submit
          </button>
        </form>

        <Current data={weatherData} />
        <Forecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    searchWeather();
    return "Loading...";
  }
}
