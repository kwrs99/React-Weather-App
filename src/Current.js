import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import "./App.css";

import sunIcon from "./images/sun.png";

export default function Current(props) {
  let wind = Math.round(props.data.wind);
  return (
    <div class="row">
      <div class="col-6">
        <h1 id="city-name">{props.data.city}</h1>

        <FormattedDate id="date-time" date={props.data.date} />
        <img id="icon" src={props.data.icon} />
        <h3 id="description">{props.data.description}</h3>
      </div>
      <div class="col">
        <ul>
          <li>
            <h2>
              <WeatherTemperature celcius={props.data.temperature} />
            </h2>
          </li>
          <li>
            <h3 id="high-low">Hi: 23 | Lo: 18°C</h3>
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
                Humidity: <span id="humidity">{props.data.humidity}</span>%
              </h3>
            </li>

            <li>
              <h3>
                Wind: <span id="wind">{wind}</span> km/h
              </h3>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
