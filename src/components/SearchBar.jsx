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
    <div className='max-w-[1640px] min-w-[10px] mx-auto'>
    <form onSubmit={handleSubmit} className=" flex mt-4 text-white  text-center">
      <input 
        type="text" 
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="flex-1 p-2 border border-gray-300 rounded-l-full bg-black/80 outline-none focus:bg-black/50"
      />

      <button
        type="submit"
        className="bg-blue-600 text-black px-4 hover:text-gray-300 hover:bg-blue-700 border border-gray-300 rounded-r-full cursor-pointer duration-300"
      >
        Search
      </button>
    </form>
    </div>
  );
};

export default SearchBar;
