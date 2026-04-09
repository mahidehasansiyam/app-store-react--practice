import React, { createContext, useState } from 'react';

export const ContextApi = createContext()

const ContextAppData = ({children}) => {



  const [installedApps, setInstalledApps] = useState([]);

  const data = {
    installedApps,
    setInstalledApps
  };
  return (
    <ContextApi.Provider value={data}> 
         {children}
    </ContextApi.Provider>
  )
};

export default ContextAppData;