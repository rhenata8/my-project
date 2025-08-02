import React from 'react';
import { Link } from 'react-router-dom';

const CountryCard = ({ country }) => {
  return (
    // Gunakan Link untuk navigasi saat kartu di-klik
    <Link to={`/country/${country.name.common}`}>
      <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300 cursor-pointer h-full">
        <img src={country.flags.svg} alt={`Flag of ${country.name.common}`} className="w-full h-40 object-cover" />
        <div className="p-4">
          <h3 className="font-bold text-lg mb-2">{country.name.common}</h3>
          <p><span className="font-semibold">Population:</span> {country.population.toLocaleString()}</p>
          <p><span className="font-semibold">Region:</span> {country.region}</p>
          <p><span className="font-semibold">Capital:</span> {country.capital ? country.capital[0] : 'N/A'}</p>
        </div>
      </div>
    </Link>
  );
};

export default CountryCard;