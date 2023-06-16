import React from "react";
import "./App.css";
import sunIcon from "./images/sun.png";

export default function Current(props) {
  return (
    <div class="row">
      <div class="col-6">
        <h1 id="city-name">Gaborone</h1>
        <h3 id="date-time">15th May 2023</h3>
        <img id="icon" src={sunIcon} alt="sun" />

        <h1 id="high-low">23 | 18°C</h1>
      </div>
      <div class="col">
        <ul>
          <li>
            <h2>
              <em id="current-temp">23 </em>
              <span>
                <a href="#" class="active" id="celsius">
                  {" "}
                  °C
                </a>
                <a> | </a>
                <a href="#" id="fahrenheit">
                  °F
                </a>
              </span>
            </h2>
          </li>
          <li>
            <h3 id="description">Scattered Clouds</h3>
          </li>
        </ul>
      </div>

      <div class="col temp">
        <div class="col vertical">
          <ul>
            <br />
            <br />
            <li>
              <h3>
                Humidity: <span id="humidity">35</span>%
              </h3>
            </li>

            <li>
              <h3>
                Wind: <span id="wind">2</span> km/h
              </h3>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
