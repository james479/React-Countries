import React from "react";
import { useSelector } from "react-redux";
import ToggleDarkModeButton from "./ToggleDarkModeButton";

const TopBar = () => {
  const darkModeState = useSelector((state) => state.darkMode);
  const { darkMode } = darkModeState;
  const background = {
    dark: {
      backgroundColor: "hsl(209, 23%, 22%)",
    },
    light: {
      backgroundColor: "hsl(0, 0%, 100%)",
    },
  };
  return (
    <section
      className="topbar"
      style={darkMode ? background.dark : background.light}
    >
      <h3>Where in the world?</h3>
      <ToggleDarkModeButton />
    </section>
  );
};

export default TopBar;
