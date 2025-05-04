import React from "react";
import { useDispatch } from "react-redux";
import { fetchWeather } from "../../Redux/weatherSlice"; 

const CityDropdown = () => {
  const dispatch = useDispatch();

  const handleCitySelect = (e) => {
    const selectedCity = e.target.value;
    if (selectedCity !== "") {
      dispatch(fetchWeather(selectedCity));
    }
  };

  return (
    <div className="flex items-center space-x-4">
      {/* City Dropdown */}
      <select
        onChange={handleCitySelect}
        defaultValue=""
        className="border border-green-500 text-white py-1 px-2 rounded-md bg-green-950 cursor-pointer"
      >
        <option value="" disabled>
          Location
        </option>
        <option value="Dhaka" className="text-white">
          Dhaka
        </option>
        <option value="Chittagong" className="text-white">
          Chittagong
        </option>
        <option value="Sylhet" className="text-white">
          Sylhet
        </option>
        <option value="New York" className="text-white">
          New York
        </option>
        <option value="London" className="text-white">
          London
        </option>
        <option value="Tokyo" className="text-white">
          Tokyo
        </option>
        <option value="Sydney" className="text-white">
          Sydney
        </option>
      </select>
    </div>
  );
};

const Header = () => {
  return (
    <nav className="bg-green-950/90 p-4 text-white">
      <div className="w-11/12 mx-auto flex justify-between items-center">
        {/* Left Side: Weather-X */}
        <div className="text-2xl font-bold">Weather-X</div>

        {/* Right Side: Navbar items */}
        <div className="flex items-center space-x-6">
          <CityDropdown />
        </div>
      </div>
    </nav>
  );
};

export default Header;
