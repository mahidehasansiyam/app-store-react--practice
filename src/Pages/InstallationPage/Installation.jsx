import React, { useContext } from 'react';
import { ContextApi } from '../../ContextAPI/ContextAppData';
import { FaStar } from 'react-icons/fa';
import { MdOutlineFileDownload } from 'react-icons/md';

const Installation = () => {
  const { installedApps, setInstalledApps } = useContext(ContextApi);

  const handleUninstall = (app) => {
    const restApps = installedApps.filter((i) => i.id !== app.id)
    setInstalledApps(restApps);
  }
  if (installedApps.length === 0) {
    return <h2 className='font-bold p-10 text-center text-4xl'>You did not install any apps</h2>
  }
  
  return (
    <div className='w-[70vw] mx-auto'>
      {
        installedApps.map((app) => {
          return (
            <div
              key={app.id}
              className="flex justify-between items-center px-10 py-5 bg-white shadow-2xl m-3 rounded-2xl"
            >
              <div className="flex justify-start items-center gap-3">
                <div>
                  <img className="w-[100px] h-auto" src={app.image} alt="" />
                </div>
                <div>
                  <h2>{app.title}</h2>
                  <div className="flex justify-start gap-6">
                    <h2 className="text-green-500 font-bold flex justify-center items-center gap-1">
                      <MdOutlineFileDownload />
                      {app.downloads}
                    </h2>
                    <h2 className="text-amber-700 font-bold flex justify-center items-center gap-1">
                      <FaStar />
                      {app.ratingAvg}
                    </h2>
                    <h2>{app.size}MB</h2>
                  </div>
                </div>
              </div>
              <div>
                <button
                  onClick={() => handleUninstall(app)}
                  className="btn bg-amber-300"
                >
                  Uninstall
                </button>
              </div>
            </div>
          );
        })
      }
    </div>
  );
};

export default Installation;