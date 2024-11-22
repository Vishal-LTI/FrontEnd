import React from "react";

const PrimaryButton = ({
  label,
  btnColor = "#db0011",
  onClick,
  type = "button",
  style = {},
  width = "200px",
  disabled
}) => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <button
      disabled={disabled}
        type={type}
        className="btn btn-primary"
        onClick={onClick}
        style={{
          backgroundColor: btnColor,
          borderColor: btnColor,
          ...style,
          width: width,
        }}
      >
        {label}
      </button>
    </div>
  );
};

export default PrimaryButton;
