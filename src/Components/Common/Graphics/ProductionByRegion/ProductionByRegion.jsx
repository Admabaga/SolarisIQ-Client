
import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import ApiClient from '../../../../Utils/ApiClient/ApiClient.jsx';
import './ProductionByRegion.css';

const ProductionByRegion = ({ year, title, indicator, label, endPoint }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    ApiClient.get(endPoint, {
      params: {
        indicator: indicator,
        year: year,
        label: label,
        endPoint: endPoint,
        title: title
      }
    }).then(res => setData(res.data));
  }, [year, title, endPoint, indicator, label]);

  const chartData = {
    labels: data.map(d => d.continent),
    datasets: [
      {
        label: label,
        data: data.map(d => d.value),
        backgroundColor: '#38bdf8',
        borderRadius: 6,
      },
    ],
  };

  return (
    <div className="wind-region-container">
      <h3>{title}</h3>
      <label>Año: {year}</label>
      <Bar data={chartData} options={{ responsive: true }} />
    </div>
  );
};

export default ProductionByRegion;