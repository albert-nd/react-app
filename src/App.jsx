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
    <div className="min-h-screen bg-gradient-to-bl from-cyan-300 to-purple-300 flex items-start sm:items-center justify-center px-4 py-6">
      <div className="bg-black/80 border border-black text-white rounded-3xl shadow-lg p-6 sm:p-8 max-w-md w-full">
        <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-purple-200">
          WEATHER APP
        </h1>

        <SearchBar fetchWeather={fetchWeather} />

        {loading && (
          <p className="text-center mt-4 text-sm sm:text-base">Loading...</p>
        )}
        {error && (
          <p className="text-center text-red-500 mt-4 text-sm sm:text-base">{error}</p>
        )}

        {weather && (
          <div className="mt-6 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold">{weather.name}</h2>

            <div className="flex justify-center items-center mt-2">
              <img
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                alt={weather.weather[0].description}
                className="w-16 h-16 sm:w-18 sm:h-18"
              />
              <p className="text-3xl sm:text-4xl font-bold ml-2 mt-1">
                {Math.round(weather.main.temp)}°C
              </p>
            </div>

            <p className="text-xl sm:text-2xl font-bold capitalize mt-2">
              {weather.weather[0].description}
            </p>

            <div className="grid grid-cols-2 gap-4 mt-6 text-sm sm:text-base">
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
