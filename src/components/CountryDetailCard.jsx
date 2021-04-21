/* eslint-disable react/prop-types */
import React from "react";
import { numberWithCommas } from "../utilities/numberWithCommas";

const CountryDetailCard = ({ flag, name, population, region, capital }) => {
  return (
    <article href="#" className="country-detail-card">
      <img src={flag} alt={name} />
      <div className="country-details">
        <h4 className="country-name">{name}</h4>
        <p>
          <span>Population:</span> {numberWithCommas(population)}
        </p>
        <p>
          <span>Region:</span>
          {region}
        </p>
        <p>
          <span>Capitol:</span>
          {capital}
        </p>
      </div>
    </article>
  );
};

export default CountryDetailCard;
