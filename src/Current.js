import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import "./App.css";

export default function Current(props) {
  let wind = Math.round(props.data.wind);

  return (
    <div className="row">
      <div className="col-4 mt-5">
        <h1 id="city-name">{props.data.city}</h1>

        <h6 id="date-time ">
          <FormattedDate date={props.data.date} />
        </h6>
        <ul>
          <li>
            <h2 id="temp">
              <WeatherTemperature celcius={props.data.temperature} />
            </h2>
          </li>
        </ul>
      </div>
      <div className="col-4 mt-5">
        <img id="icon-main" alt="icon" src={props.data.icon} />
        <h3>{props.data.description}</h3>
      </div>

      <div className="col-4 mt-5">
        {" "}
        <h1 id="city-name"></h1>
        <ul>
          <li>
            <h4 id="humidity">
              Humidity: <span>{props.data.humidity}</span>%
            </h4>
          </li>

          <li>
            <h4>
              Wind: <span id="wind">{wind}</span> km/h
            </h4>
          </li>
        </ul>
      </div>
    </div>
  );
}
