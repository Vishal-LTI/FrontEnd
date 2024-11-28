import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const DonutChartComponent = ({ data, title }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <Doughnut data={data} />
      </div>
    </div>
  );
};

export default DonutChartComponent;
