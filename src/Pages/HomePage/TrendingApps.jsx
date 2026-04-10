
import { NavLink } from 'react-router';
import UseFetchData from '../HookDataFetch/UseFetchData';
import ShowApps from './ShowApps';

const TrendingApps = () => {

  const { apps, loading } = UseFetchData();
    // console.log(apps, loading);
  
  return (
    <div>
      <div className="my-5 text-center space-y-3">
        <h2 className="text-3xl font-bold">Trending Apps</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
      </div>
      <div className="grid grid-cols-4 justify-items-center items-center container mx-auto gap-4 auto-rows-fr">
        {apps.slice(0, 9).map(app => (
          <ShowApps key={app.id} app={app}></ShowApps>
        ))}
      </div>
      <NavLink to={'/apps'}>
        <div className="text-center my-3">
          <button className="btn bg-emerald-600 text-white">Shaw All</button>
        </div>
      </NavLink>
    </div>
  );
};

export default TrendingApps;

