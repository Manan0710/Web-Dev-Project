import React, { useState } from "react";

export default function Weather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const API_KEY = "1ab0b507adfcdb866c68b258d0a00e22"; // <-- Replace with your OpenWeatherMap API key

  const fetchWeather = async () => {
    if (!city) {
      setError("Please enter a destination city.");
      return;
    }
    setError("");

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );
      const data = await response.json();

      if (data.cod === "404") {
        setError("City not found, try again.");
        setWeather(null);
        return;
      }

      setWeather({
        name: data.name,
        country: data.sys.country,
        temp: data.main.temp,
        feels_like: data.main.feels_like,
        description: data.weather[0].description,
        icon: data.weather[0].icon,
      });
    } catch (err) {
      setError("Failed to fetch weather data.");
      setWeather(null);
    }
  };

  return (
    <div
      className="pt-20 px-6 md:px-20 min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('https://wallpaperaccess.com/full/2393045.jpg')",
      }}
    >
      <h2 className="text-4xl font-bold text-white mb-6 text-center drop-shadow-lg">
        🌤 Weather Forecast
      </h2>

      <div className="max-w-xl mx-auto bg-white/90 rounded-xl shadow-xl p-8 space-y-6">
        <input
          type="text"
          placeholder="Enter Destination City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-cyan-500"
        />
        <button
          onClick={fetchWeather}
          className="w-full bg-gradient-to-r from-cyan-500 to-green-400 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition"
        >
          Get Weather
        </button>

        {error && <p className="text-red-500 text-center">{error}</p>}

        {weather && (
          <div className="text-center space-y-3">
            <h3 className="text-2xl font-bold text-gray-800">
              {weather.name}, {weather.country}
            </h3>
            <img
              src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
              alt="weather icon"
              className="mx-auto"
            />
            <p className="text-lg text-gray-700 capitalize">
              {weather.description}
            </p>
            <p className="text-xl font-semibold">
              🌡 {weather.temp}°C (Feels like {weather.feels_like}°C)
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
