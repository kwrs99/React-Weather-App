import React from "react";
import "./App.css";
import axios from "axios";
import WeatherTemperature from "./WeatherTemperature";
import sunIcon from "./images/sun.png";
import rainIcon from "./images/rain-clouds.png";

export default function Forecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  const apiKey = "b400ae3b711a616262d18b0ca2cbe78f";
  const longitude = props.coordinates.lon;
  const latitude = props.coordinates.lat;
  const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);
  return (
    <div class="row">
      <div class="col-md-2">
        <h4>Tomorrow</h4>
        <img src={rainIcon} alt="rain clouds" class="rain" width="100px" />
        <p>29°C | 19°C</p>
        <p>Heavy Rain</p>
      </div>
      <div class="col-md-2">
        <h4>Thursday</h4>
        <img src={rainIcon} alt="rain clouds" class="rain" width="100px" />
        <p>28°C | 18°C</p>
        <p>Light rain</p>
      </div>
      <div class="col-md-2">
        <h4>Friday</h4>
        <img src={rainIcon} alt="rain clouds" class="rain" width="100px" />
        <p>28°C | 18°C</p>
        <p>Rain</p>
      </div>
      <div class="col-md-2">
        <h4>Saturday</h4>
        <img src={rainIcon} alt="rain clouds" class="rain" width="100px" />
        <p>26°C | 17°C</p>
        <p>Light rain</p>
      </div>
      <div class="col-md-2">
        <h4>Sunday</h4>
        <img src={sunIcon} alt="sun" class="sun" width="100px" />
        <p>28°C | 18°C</p>
        <p>Sunny</p>
      </div>
    </div>
  );
}
