import React from 'react';

const NumberCard = ({ title, value }) => {
  return (
    <div className="col-md-3">
      <div className="card">
        <div className="card-body">
        <h5 className="card-text">{value}</h5>
          <p className="card-title">{title}</p>
         
        </div>
      </div>
    </div>
  );
};

export default NumberCard;
