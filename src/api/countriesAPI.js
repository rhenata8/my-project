import axios from 'axios';

// Konfigurasi dasar untuk axios, menetapkan URL utama API
const apiClient = axios.create({
  baseURL: 'https://restcountries.com/v3.1',
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * Mengambil daftar semua negara dari API.
 * @returns {Promise<Array>} Promise yang akan resolve dengan array data negara.
 */
export const getAllCountries = async () => {
  try {
    const response = await apiClient.get('/all');
    return response.data;
  } catch (error) {
    console.error('Error fetching all countries:', error);
    // Melempar error kembali agar bisa ditangkap oleh komponen yang memanggil
    throw error;
  }
};

/**
 * Mengambil data detail satu negara berdasarkan namanya.
 * @param {string} countryName - Nama resmi negara.
 * @returns {Promise<Object>} Promise yang akan resolve dengan objek data negara.
 */
export const getCountryByName = async (countryName) => {
  try {
    // Parameter `fullText=true` memastikan pencarian nama yang sama persis
    const response = await apiClient.get(`/name/${countryName}?fullText=true`);
    // API mengembalikan array, kita ambil elemen pertama
    return response.data[0];
  } catch (error)
    {
    console.error(`Error fetching country: ${countryName}`, error);
    throw error;
  }
};