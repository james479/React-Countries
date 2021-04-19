import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toogleDarkMode } from "../redux/actions/toggleDarkModeAction";

const ToggleDarkModeButton = () => {
  const dispatch = useDispatch();
  const darkModeState = useSelector((state) => state.darkMode);
  const { darkMode } = darkModeState;

  const toggleDarkMode = () => {
    dispatch(toogleDarkMode());
  };

  return (
    <div className="toggle-dark-mode-button" onClick={toggleDarkMode}>
      <i className={darkMode ? "fas fa-moon" : "far fa-moon"}></i>
      <span>Dark Mode</span>
    </div>
  );
};

export default ToggleDarkModeButton;
