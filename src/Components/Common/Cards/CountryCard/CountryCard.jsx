import React from 'react';
import PropTypes from 'prop-types';
import './CountryCard.css';

const CountryCard = ({ country, flagEmoji, capital, population, region, onLearnMore }) => {
  return (
    <div className="country-card">
      <div className="country-flag">
        <span className="flag-emoji">{flagEmoji}</span>
      </div>
      <div className="country-info">
        <h2 className="country-name">{country}</h2>
        <div className="country-details">
          <p><strong>Capital:</strong> {capital}</p>
          <p><strong>Población:</strong> {population}</p>
          <p><strong>Región:</strong> {region}</p>
        </div>
        <button 
          className="learn-more-btn"
          onClick={onLearnMore}
        >
          Conocer más
        </button>
      </div>
    </div>
  );
};

CountryCard.propTypes = {
  country: PropTypes.string.isRequired,
  flagEmoji: PropTypes.string.isRequired,
  capital: PropTypes.string.isRequired,
  population: PropTypes.string.isRequired,
  region: PropTypes.string.isRequired,
  onLearnMore: PropTypes.func
};

export default CountryCard;