import React from 'react';

const Strit = () => {
  return (
    <section className="w-full py-20 px-6 bg-gradient-to-r from-[#7c3aed] to-[#9333ea] text-white">
      <div className="container mx-auto text-center">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-5xl font-bold mb-16">
          Trusted By Millions, Built For You
        </h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0">
          {/* Stat 1: Total Downloads */}
          <div className="flex flex-col items-center px-4 md:border-r border-white/20">
            <span className="text-lg font-light opacity-80 mb-2">
              Total Downloads
            </span>
            <span className="text-5xl font-extrabold mb-2">29.6M</span>
            <span className="text-sm font-medium opacity-70">
              21% More Than Last Month
            </span>
          </div>

          {/* Stat 2: Total Reviews */}
          <div className="flex flex-col items-center px-4 md:border-r border-white/20">
            <span className="text-lg font-light opacity-80 mb-2">
              Total Reviews
            </span>
            <span className="text-5xl font-extrabold mb-2">906K</span>
            <span className="text-sm font-medium opacity-70">
              46% More Than Last Month
            </span>
          </div>

          {/* Stat 3: Active Apps */}
          <div className="flex flex-col items-center px-4">
            <span className="text-lg font-light opacity-80 mb-2">
              Active Apps
            </span>
            <span className="text-5xl font-extrabold mb-2">132+</span>
            <span className="text-sm font-medium opacity-70">
              31 More Will Launch
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Strit;