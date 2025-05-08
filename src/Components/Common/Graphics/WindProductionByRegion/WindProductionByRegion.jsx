
import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import ApiClient from '../../../../Utils/ApiClient/ApiClient.jsx';
import './WindProductionByRegion.css';

const WindProductionByRegion = ({year}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    ApiClient.get('/renewableEnergyProductions/totalProductionByIndicatorAndRegions', {
      params: {
        indicator: 'Wind Energy Generation',
        year: year
      }
    }).then(res => setData(res.data));
  }, [year]);
  
  const chartData = {
    labels: data.map(d => d.continent),
    datasets: [
      {
        label: `Producción Eólica por Región (${data[0]?.unit || 'MW'})`,
        data: data.map(d => d.value),
        backgroundColor: '#38bdf8',
        borderRadius: 6,
      },
    ],
  };

  return (
    <div className="wind-region-container">
      <h3>Producción Total por Región</h3>
      <label>Año: {year}</label>
      <Bar data={chartData} options={{ responsive: true }} />
    </div>
  );
};

export default WindProductionByRegion;