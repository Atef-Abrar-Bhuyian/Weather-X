import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeather } from "../../Redux/weatherSlice";
import Loader from "../../Components/Loader/Loader";
import { IoWaterOutline } from "react-icons/io5";
import { PiTrendDown, PiTrendUpLight } from "react-icons/pi";
import { WiDayWindy } from "react-icons/wi";
import { LuSunrise, LuSunset } from "react-icons/lu";

const Home = () => {
  const [city, setCity] = useState("");
  const dispatch = useDispatch();

  const { data, loading, error } = useSelector((state) => state.weather);

  const handleInputChange = (e) => setCity(e.target.value);
  const handleSearch = () => {
    if (city.trim()) dispatch(fetchWeather(city));
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <section
      className="relative min-h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1607577069986-0afe85b8cca9")',
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 flex flex-col items-center justify-start pt-20 px-4 text-center min-h-screen">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-8 drop-shadow-lg">
          Experience <span className="text-green-500">Tomorrow!</span> Weather
          Today!
        </h1>

        {/* Search Bar */}
        <div className="bg-white/30 backdrop-blur-md py-2 px-4 rounded-full shadow-2xl flex items-center w-full max-w-xl space-x-4 transition-all duration-300 hover:scale-105">
          <div
            onClick={handleSearch}
            className="cursor-pointer bg-gradient-to-r from-green-500/20 to-cyan-500/20 p-3 rounded-full"
          >
            <FaSearch className="text-white text-xl" />
          </div>
          <input
            type="text"
            value={city}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder="Search for city"
            className="bg-transparent text-white placeholder-white/70 outline-none w-full text-sm sm:text-base"
          />
        </div>

        {error && (
          <p className="text-base text-red-400 bg-red-500/10 px-4 py-2 rounded-lg shadow mt-4 w-full max-w-md">
            ⚠️ {error}
          </p>
        )}

        {/* Weather Result */}
        <div className="mt-8 text-white flex justify-center w-full px-2 mb-10">
          {loading && <Loader />}

          {data && !loading && (
            <div className="bg-gradient-to-br from-green-400/20 to-cyan-500/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-3xl p-6 sm:p-8 w-full max-w-lg text-left space-y-6 transition-all duration-300 hover:scale-[1.02]">
              {/* Location + Icon */}
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="text-center sm:text-left">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white drop-shadow-md">
                    {data?.name}, {data?.sys?.country}
                  </h2>
                  <p className="text-sm text-white/70">
                    {new Date().toLocaleString()}
                  </p>
                </div>
                <img
                  src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                  alt={data?.weather[0]?.description}
                  className="w-16 h-16 drop-shadow-lg"
                />
              </div>

              {/* Temperature + Condition */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
                <p className="text-5xl sm:text-6xl font-extrabold text-green-300 drop-shadow-sm">
                  {Math.round(data?.main?.temp)}°C
                </p>
                <p className="capitalize text-lg sm:text-xl text-white/90 italic">
                  {data?.weather[0]?.description}
                </p>
              </div>

              {/* Details */}
              <div className="grid grid-cols-2 gap-4 text-sm sm:text-base text-white/90">
                <p className="flex items-center gap-1">
                  <IoWaterOutline className="text-blue-500" />
                  Humidity:{" "}
                  <span className="font-semibold text-green-200">
                    {data?.main?.humidity}%
                  </span>
                </p>
                <p className="flex items-center gap-1">
                  <WiDayWindy className="text-lg" />
                  Wind:{" "}
                  <span className="font-semibold text-green-200">
                    {data?.wind?.speed} m/s
                  </span>
                </p>
                <p className="flex items-center gap-1">
                  <PiTrendUpLight /> Max:{" "}
                  <span className="font-semibold text-green-200">
                    {data?.main?.temp_max}°C
                  </span>
                </p>
                <p className="flex items-center gap-1">
                  <PiTrendDown />
                  Min:{" "}
                  <span className="font-semibold text-green-200">
                    {data?.main?.temp_min}°C
                  </span>
                </p>
                <p className="flex items-center gap-1">
                  <LuSunrise className="text-lg" />
                  Sunrise:{" "}
                  <span className="font-semibold text-green-200">
                    {new Date(data?.sys?.sunrise * 1000).toLocaleTimeString()}
                  </span>
                </p>
                <p className="flex items-center gap-1">
                  <LuSunset />
                  Sunset:{" "}
                  <span className="font-semibold text-green-200">
                    {new Date(data?.sys?.sunset * 1000).toLocaleTimeString()}
                  </span>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Home;
