import React, { useContext } from 'react';
import { NavLink, useParams } from 'react-router';
import UseFetchData from '../HookDataFetch/UseFetchData';
import { FaStar } from 'react-icons/fa';
import { ContextApi } from '../../ContextAPI/ContextAppData';

const AppDetails = () => {
  const { apps, loading } = UseFetchData();
  const { id } = useParams();
  const expectedApp = apps.find(app => app.id == id);

  const { installedApps, setInstalledApps } = useContext(ContextApi);

  const handleInstall = () => {
    setInstalledApps([...installedApps,expectedApp])
  }

  console.log(installedApps);

    
  // console.log(expectedApp);

  if (loading) {
    return
  }


  return (
    <div className="text-center space-y-3  w-[500px] mx-auto my-10 p-5 rounded-2xl bg-emerald-100">
      <div className="text-center mx-auto flex justify-center">
        <img className="w-[10%] " src={expectedApp.image} alt="" />
      </div>
      <h2> Name :{expectedApp.title}</h2>
      <h2>Company Name : {expectedApp.companyName}</h2>
      <h2>Reviews : {expectedApp.reviews}</h2>
      <h2 className="flex gap-3 items-center justify-center">
        Ratings : {expectedApp.ratingAvg} <FaStar />
      </h2>
      <h2>Downloads : {expectedApp.downloads}</h2>
      <h2>Size : {expectedApp.size}MB</h2>
      <div className='flex gap-10 justify-center'>
        <NavLink to={'/apps'}>
          <button className="btn bg-rose-700 text-white" >Back</button>
        </NavLink>
        <button onClick={()=>{handleInstall()}} className="btn bg-emerald-700 text-white">Install</button>
      </div>
    </div>
  );
  
};

export default AppDetails;



