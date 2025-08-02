import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CountryCard from '../components/CountryCard';
import SearchBar from '../components/SearchBar';

const HomePage = () => {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        setLoading(true);
        const response = await axios.get('https://restcountries.com/v3.1/all');
        setCountries(response.data);
        setError(null);
      } catch (err) {
        setError('Gagal memuat data negara. Coba lagi nanti.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, []); // Array kosong berarti efek ini hanya berjalan sekali saat komponen dimuat

  // Logika untuk filter negara berdasarkan pencarian
  const filteredCountries = countries.filter(country =>
    country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <p className="text-center mt-8">Loading...</p>;
  if (error) return <p className="text-center mt-8 text-red-500">{error}</p>;

  return (
    <div>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
        {filteredCountries.map(country => (
          <CountryCard key={country.cca3} country={country} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;