import { useState } from "react";
import Axios from "axios";
import SearchBar from "./components/SearchBar";

function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const API_KEY = import.meta.env.VITE_API_KEY;
  const API_URL = `https://api.openweathermap.org/data/2.5/weather`;

  const fetchWeather = async (city) => {
    setLoading(true);
    setError('');
    setWeather(null);

    try {
      const url = `${API_URL}?q=${city}&units=metric&appid=${API_KEY}`;
      const response = await Axios.get(url);
      console.log(response.data);
      setWeather(response.data);
    } catch (err) {
      if (err.response && err.response.status === 404) {
        setError("City not found, please try again.");
      } else {
        setError("An error occurred. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='max-w-[1640px] min-w-[10px] mx-auto my-auto h-[900px] bg-gradient-to-bl from-cyan-300 to-purple-300 pt-2 pb-9'>
      <div className="bg-black/80 border-[1px] border-black text-white rounded-[50px] shadow-lg mt-[150px] p-8 max-w-md w-full mx-auto">

        <h1 className="text-3xl font-bold text-center mb-6 text-purple-200">
          WEATHER APP
        </h1>

        {/* Pass fetchWeather to SearchBar */}
        <SearchBar fetchWeather={fetchWeather} />

        {/* Loading */}
        {loading && <p className="text-center mt-4">Loading...</p>}

        {/* Error */}
        {error && <p className="text-center text-red-500 mt-4">{error}</p>}

        {/* Weather Result */}
        {weather && (
          <div className="mt-6 text-center">
            <h2 className="text-4xl font-bold">{weather.name}</h2>
            <div className="flex">
              <img
                src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                alt={weather.weather[0].description}
                className="ml-[160px] w-18 h-18"
              />
              <p className="text-4xl font-bold mt-3">
                {Math.round(weather.main.temp)}°C
              </p>
            </div>

            <p className="text-2xl font-bold">{weather.weather[0].description}</p>

            <div className="grid grid-cols-2">
              <div className="font-bold">
                <p className="text-gray-400">Humidity</p>
                <p>{weather.main.humidity}%</p>
              </div>

              <div className="font-bold">
                <p className="text-gray-400">Wind</p>
                <p>{weather.wind.speed} m/s</p>
              </div>

              <div className="font-bold">
                <p className="text-gray-400">Pressure</p>
                <p>{weather.main.pressure} hPa</p>
              </div>

              <div className="font-bold">
                <p className="text-gray-400">Feels Like</p>
                <p>{Math.round(weather.main.feels_like)}°C</p>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default App;
