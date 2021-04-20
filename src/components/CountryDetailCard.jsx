/* eslint-disable react/prop-types */
import React from "react";

const CountryDetailCard = ({ flag, name, population, region, capital }) => {
  return (
    <div href="#" className="country-detail-card">
      <img src={flag} alt={name} />
      <div className="country-details">
        <h4 className="country-name">{name}</h4>
        <p>
          <strong>Population:</strong> {population}
        </p>
        <p>
          <strong>Region:</strong>
          {region}
        </p>
        <p>
          <strong>Capitol:</strong>
          {capital}
        </p>
      </div>
    </div>
  );
};

export default CountryDetailCard;
