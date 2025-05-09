import React, { useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import ApiClient from '../../../../Utils/ApiClient/ApiClient';
import './ProductionPercentageByRegion.css';

const ProductionPercentageByRegion = ({year, label, title, endPoint, indicator}) => {
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
    labels: data.map(d => d.region),
    datasets: [
      {
        label: label,
        data: data.map(d => d.percentage),
        backgroundColor: [
          '#60a5fa', '#818cf8', '#f472b6', '#facc15', '#34d399', '#f87171'
        ]
      },
    ]
  };

  return (
    <div className="wind-percentage-container">
      <h3>{title}</h3>
      <label>Año: {year}</label>
      <Doughnut data={chartData} options={{ responsive: true }} />
    </div>
  );
};

export default ProductionPercentageByRegion;