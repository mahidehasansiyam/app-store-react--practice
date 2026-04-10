import React from 'react';
import UseFetchData from '../HookDataFetch/UseFetchData';
import ShowApps from '../HomePage/ShowApps';

const AppsPage = () => {
  const { apps, loading } = UseFetchData();
  return (
    <div>
      <div className="my-5 text-center space-y-3">
        <h2 className="text-3xl font-bold">Trending Apps</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
      </div>
      <div className="grid grid-cols-4 justify-items-center items-center container mx-auto gap-4 mb-8 auto-rows-fr">
        {apps.map(app => (
          <ShowApps key={app.id} app={app}></ShowApps>
        ))}
        ;
      </div>
    </div>
  );
};

export default AppsPage;