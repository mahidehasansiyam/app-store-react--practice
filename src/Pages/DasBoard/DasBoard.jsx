import React, { useContext } from 'react';
import {
  Legend,
  Pie,
  PieChart,
  Tooltip,
  
} from 'recharts';
import { ContextApi } from '../../ContextAPI/ContextAppData';
import UseFetchData from '../HookDataFetch/UseFetchData';
import { Cell } from 'recharts';


const DasBoard = () => {
  const { apps, loading } = UseFetchData();

  const { installedApps, setInstalledApps } = useContext(ContextApi);

  const uninstalledapps = apps.length - installedApps.length;
  const data = [
    { name: 'Installed', value: installedApps.length },
    { name: 'Not Installed', value: uninstalledapps },
  ];

  const COLORS = ['#4CAF50', '#F44336']; // green & red

  return (
    <div>
      <h2 className='text-center m-5 bg-amber-100 p-4 font-bold'>Ratio of installed and uninstalled apps</h2>
      <PieChart
        className="mx-auto"
        style={{
          width: '100%',
          maxWidth: '500px',
          maxHeight: '80vh',
          aspectRatio: 1,
        }}
        responsive
      >
        <Pie data={data} dataKey="value" labelLine={false}>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
          ))}
        </Pie>
        <Legend></Legend>
        <Tooltip></Tooltip>
      </PieChart>
    </div>
  );
};

export default DasBoard;