import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const DonutChartComponent = ({ data }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Principal vs Interest</h5>
        <Doughnut data={data} />
      </div>
    </div>
  );
};

export default DonutChartComponent;
