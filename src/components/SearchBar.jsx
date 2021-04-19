import React from "react";
import { useSelector } from "react-redux";

const SearchBar = () => {
  const darkModeState = useSelector((state) => state.darkMode);
  const { darkMode } = darkModeState;

  return (
    <div className="search-bar-container">
      <input
        type="text"
        className={`search-bar ${
          darkMode ? "search-bar-dark" : "search-bar-light"
        }`}
        placeholder="Search for a country..."
      ></input>
    </div>
  );
};

export default SearchBar;
