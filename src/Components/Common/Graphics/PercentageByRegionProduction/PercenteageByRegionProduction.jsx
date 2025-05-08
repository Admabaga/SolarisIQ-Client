import React, { useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import ApiClient from '../../../../Utils/ApiClient/ApiClient';
import './WindProductionPercentageByRegion.css';

const WindProductionPercentageByRegion = ({year}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    ApiClient.get('/renewableEnergyProductions/renewableProductionInPercentageByRegions', {
      params: { year, indicator: 'Wind Energy Generation' }
    }).then(res => setData(res.data));
  }, [year]);

  const chartData = {
    labels: data.map(d => d.region),
    datasets: [
      {
        label: `% Producción por Región (${year})`,
        data: data.map(d => d.percentage),
        backgroundColor: [
          '#60a5fa', '#818cf8', '#f472b6', '#facc15', '#34d399', '#f87171'
        ]
      },
    ]
  };

  return (
    <div className="wind-percentage-container">
      <h3>Participación Porcentual Regional</h3>
      <label>Año: {year}</label>
      <Doughnut data={chartData} options={{ responsive: true }} />
    </div>
  );
};

export default WindProductionPercentageByRegion;