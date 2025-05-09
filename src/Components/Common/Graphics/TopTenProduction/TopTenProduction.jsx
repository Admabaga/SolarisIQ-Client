import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import ApiClient from '../../../../Utils/ApiClient/ApiClient';
import './TopProducers.css';

const TopProducers = ({year, title, label, endPoint, indicator}) => {
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
    labels: data.map(d => d.countryName),
    datasets: [
      {
        label: label,
        data: data.map(d => d.value),
        backgroundColor: '#4ea8de'
      },
    ]
  };

  return (
    <div className="top-wind-container">
      <h3>{title}</h3>
      <label>Año: {year}</label>
      <Bar data={chartData} options={{ responsive: true }} />
    </div>
  );
};

export default TopProducers;