import React from 'react';
import { NavLink } from 'react-router';
import { FaStar } from 'react-icons/fa';
import { MdOutlineFileDownload } from 'react-icons/md';

const ShowApps = ({ app }) => {
  
  return (
    <NavLink to={`/apps/${app.id}`}>
      <div className=" border p-4 rounded-2xl space-y-2 ">
        <img className="w-[250px]" src={app.image} alt="" />
        <h2>{app.title}</h2>
        <div className="flex justify-between">
          <h2 className="text-green-500 font-bold flex justify-center items-center gap-1">
                                <MdOutlineFileDownload />
                                {app.downloads}
                              </h2>
          <h2 className="text-amber-700 font-bold flex justify-center items-center gap-1">
                                <FaStar />
                                {app.ratingAvg}
                              </h2>
        </div>
      </div>
    </NavLink>
  );
};

export default ShowApps;

