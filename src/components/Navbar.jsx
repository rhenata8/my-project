import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="bg-white dark:bg-gray-700 shadow-md">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <Link to="/">
            <h1 className="text-xl font-bold">Where in the world?</h1>
        </Link>
        {/* Tambahkan tombol dark mode di sini jika ingin */}
      </div>
    </header>
  );
};

export default Navbar;