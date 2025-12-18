import React, { useState } from 'react';

const SearchBar = ({ fetchWeather }) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim() !== '') {
      fetchWeather(city);
      setCity('');
    }
  };

  return (
    <div className="w-full px-4 sm:px-0 max-w-md mx-auto">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row mt-4 text-white"
      >
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="
            flex-1 p-3 text-base
            border border-gray-300
            bg-black/80 outline-none
            focus:bg-black/50
            rounded-full sm:rounded-l-full sm:rounded-r-none
          "
        />

        <button
          type="submit"
          className="
            mt-3 sm:mt-0
            sm:ml-0
            bg-blue-600 text-black
            px-6 py-3
            border border-gray-300
            rounded-full sm:rounded-r-full sm:rounded-l-none
            hover:text-gray-300 hover:bg-blue-700
            transition duration-300
          "
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
