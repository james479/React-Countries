import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { listCountries } from "../redux/actions/countriesActions";
import SearchBar from "../components/SearchBar";
import TopBar from "../components/TopBar";
import pageStyles from "../utilities/pageStyles";

const MainPage = () => {
  const dispatch = useDispatch();
  const countryList = useSelector((state) => state.countryList);
  const darkModeState = useSelector((state) => state.darkMode);
  const { darkMode } = darkModeState;
  const { countries } = countryList;

  useEffect(() => {
    dispatch(listCountries());
  }, [dispatch]);

  return (
    <main
      className="main-page"
      style={darkMode ? pageStyles.darkMode : pageStyles.lightMode}
    >
      <TopBar />
      <SearchBar />
      {countries.map((country) => (
        <p key={country.name}>{country.name}</p>
      ))}
    </main>
  );
};

export default MainPage;
