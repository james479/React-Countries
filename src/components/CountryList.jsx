import React from "react";
import { useSelector } from "react-redux";
import CountryDetailCard from "./CountryDetailCard";

const CountryList = () => {
  const { countries } = useSelector((state) => state.countryList);
  return (
    <section className="country-list">
      {countries.map((country) => (
        <CountryDetailCard
          key={country.name}
          flag={country.flag}
          name={country.name}
          population={country.population}
          region={country.region}
          capital={country.capital}
        />
      ))}
    </section>
  );
};

export default CountryList;
