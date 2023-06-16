import React from "react";
import "./App.css";
import sunIcon from "./images/sun.png";
import rainIcon from "./images/rain-clouds.png";

export default function Forecast(props) {
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
