import React from "react";
import Forecast from "./Forecast";
import Current from "./Current";
import Search from "./Search";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Search />
        <Current />
        <Forecast />
      </div>
    </div>
  );
}
