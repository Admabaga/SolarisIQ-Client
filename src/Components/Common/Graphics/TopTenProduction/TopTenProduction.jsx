import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import ApiClient from '../../../../Utils/ApiClient/ApiClient';
import './TopWindProducers.css';

const TopWindProducers = ({year}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    ApiClient.get('/renewableEnergyProductions/topTenProductionEnergys', {
      params: { year, indicator: 'Wind Energy Generation' }
    }).then(res => setData(res.data));
  }, [year]);

  const chartData = {
    labels: data.map(d => d.countryName),
    datasets: [
      {
        label: `Top 10 Países - Producción Eólica ${year}`,
        data: data.map(d => d.value),
        backgroundColor: '#4ea8de'
      },
    ]
  };

  return (
    <div className="top-wind-container">
      <h3>Top 10 Países Productores</h3>
      <label>Año: {year}</label>
      <Bar data={chartData} options={{ responsive: true }} />
    </div>
  );
};

export default TopWindProducers;