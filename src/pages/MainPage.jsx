import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { listCountries } from "../redux/actions/countriesActions";
import SearchBar from "../components/SearchBar";
import NavBar from "../components/NavBar";
import CountryList from "../components/CountryList";

const MainPage = () => {
  const dispatch = useDispatch();
  const { darkMode } = useSelector((state) => state.darkMode);

  useEffect(() => {
    dispatch(listCountries());
  }, [dispatch]);

  return (
    <main className={`main-page ${darkMode ? "dark-mode" : "light-mode"}`}>
      <NavBar />
      <SearchBar />
      <CountryList />
    </main>
  );
};

export default MainPage;
