import React, { useState } from "react";
import axios from "axios";

export default function Weather(props) {
  let [weather, setWeather] = useState(null);
  let [city, setCity] = useState("");

  function showWeather(response) {
    setWeather(
      <div>
        <ul>
          <li>
            <h3>{city}</h3>
          </li>
          <li>{Math.round(response.data.main.temp)}°C</li>
          <li>{response.data.weather[0].description}</li>
          <li>{response.data.main.humidity}%</li>
          <li>{response.data.wind.speed}m/s</li>
          <li>
            <img
              src={`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`}
              alt={response.data.weather[0].description}
            />
          </li>
        </ul>
      </div>
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b400ae3b711a616262d18b0ca2cbe78f&units=metric`;
    axios.get(url).then(showWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="Search">
      <form onSubmit={handleSubmit} id="search-form">
        <input type="search" placeholder="Enter city" onChange={updateCity} />
        <input type="submit" value="Search" />
        <button id="search-button">Search</button>
        <button id="current-location">📍</button>
      </form>
      <p>{weather}</p>
    </div>
  );
}
