import React from 'react';

const PrimaryButton = ({ label, btnColor = '#db0011', onClick, type = 'button', style = {} }) => {
  return (
    <button
      type={type}
      className="btn btn-primary"
      onClick={onClick}
      style={{
        backgroundColor: btnColor,
        borderColor: btnColor,
        ...style,
      }}
    >
      {label}
    </button>
  );
};

export default PrimaryButton;
