import React from 'react';

const PrimaryButton = ({
  label,
  btnColor = "#db0011",
  onClick,
  type = "button",
  width = "200px",
  disabled
}) => {
  return (
    <div className="d-flex justify-content-center">
      <button
        disabled={disabled}
        type={type}
        className="btn btn-primary"
        onClick={onClick}
        style={{
          backgroundColor: btnColor,
          borderColor: btnColor,
          width: width,
        }}
      >
        {label}
      </button>
    </div>
  );
};

export default PrimaryButton;
