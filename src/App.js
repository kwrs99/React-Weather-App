import React from "react";
import Search from "./Search";
import "./App.css";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Search defaultCity="Gaborone" />
      </div>
      <Footer />
    </div>
  );
}
