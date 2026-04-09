import React from 'react';
import img from '../../assets/hero.png'

const Banner = () => {
  return (
    <div className="bg-rose-50 flex flex-col justify-center text-center gap-6">
      <div className="p-4 font-bold text-4xl">
        We Build <br /> <span className="text-blue-800">Productive </span> Apps
      </div>
      <div>
        <p className="text-gray-400">
          AtHERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. <br /> Our goal is to turn your
          ideas into digital experiences that truly make an impact.
        </p>
      </div>
      <div className="mx-auto">
        <img className="w-[500px]" src={img} alt="" />
      </div>
    </div>
  );
};

export default Banner;