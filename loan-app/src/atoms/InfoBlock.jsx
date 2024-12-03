import React from 'react';

const InfoBlock = ({ title, value, className}) => {
  return (
    <div className={className}>
    <div className="mb-3">
        <label
        className="form-label"
        style={{ fontWeight: "bold" }}
        >
        {title}:
        </label>
        <span>{value}</span>
    </div>
    </div>
  );
};

export default InfoBlock;
