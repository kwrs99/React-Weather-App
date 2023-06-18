import React from "react";

export default function Search(props) {
  return (
    <div className="Search">
      <form id="search-form">
        <input
          type="search"
          placeholder="Search city"
          class="search"
          id="search-input"
          autocomplete="off"
        />
        <button id="search-button">Search</button>
        <button id="current-location">📍</button>
      </form>
    </div>
  );
}
