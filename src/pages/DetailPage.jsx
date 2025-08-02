import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const DetailPage = () => {
  const { name } = useParams(); // Mengambil 'name' dari URL
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCountryDetail = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`https://restcountries.com/v3.1/name/${name}?fullText=true`);
        setCountry(response.data[0]);
        setError(null);
      } catch (err) {
        setError('Gagal menemukan data negara.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCountryDetail();
  }, [name]); // Efek ini akan berjalan lagi jika 'name' berubah

  if (loading) return <p className="text-center mt-8">Loading details...</p>;
  if (error) return <p className="text-center mt-8 text-red-500">{error}</p>;
  if (!country) return null;

  return (
    <div>
      <Link to="/" className="inline-block bg-white dark:bg-gray-700 py-2 px-6 rounded shadow mb-8 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
        &larr; Kembali
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <img src={country.flags.svg} alt={`Flag of ${country.name.common}`} className="w-full rounded-md shadow-lg" />
        <div>
          <h1 className="text-3xl font-bold mb-6">{country.name.common}</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <p><span className="font-semibold">Native Name:</span> {Object.values(country.name.nativeName)[0].common}</p>
              <p><span className="font-semibold">Population:</span> {country.population.toLocaleString()}</p>
              <p><span className="font-semibold">Region:</span> {country.region}</p>
              <p><span className="font-semibold">Sub Region:</span> {country.subregion}</p>
              <p><span className="font-semibold">Capital:</span> {country.capital ? country.capital[0] : 'N/A'}</p>
            </div>
            <div>
              <p><span className="font-semibold">Top Level Domain:</span> {country.tld[0]}</p>
              <p><span className="font-semibold">Currencies:</span> {Object.values(country.currencies).map(c => c.name).join(', ')}</p>
              <p><span className="font-semibold">Languages:</span> {Object.values(country.languages).join(', ')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;