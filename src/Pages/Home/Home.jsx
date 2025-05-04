import React from "react";
import { FaSearch } from "react-icons/fa";

const Home = () => {
  const handleSearch = (e) => {
    const search = e.target.value;
    console.log(search); 
  };

  return (
    <section
      className="relative min-h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1607577069986-0afe85b8cca9?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJhaW55JTIwZm9yZXN0fGVufDB8fDB8fHww")',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col top-20 lg:top-40 h-full text-center px-4">
        {/* Heading */}
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-8 drop-shadow-lg">
          Experience <span className="text-green-500">Tomorrow!</span> Weather Today
        </h1>

        {/* Search Box */}
        <div className="bg-white/30 backdrop-blur-md py-2 px-4 rounded-full shadow-2xl flex items-center space-x-4 transition-all duration-300 hover:scale-105 md:w-2/4 mx-auto">
          <div className="bg-gradient-to-r from-green-500/20 to-cyan-500/20 p-3 rounded-full shadow-md hover:shadow-lg transition">
            <FaSearch className="text-white text-xl" />
          </div>
          <input
            type="text"
            onClick={handleSearch}
            placeholder="Search for city"
            className="bg-transparent text-white placeholder-white/70 border-none outline-none w-64"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
