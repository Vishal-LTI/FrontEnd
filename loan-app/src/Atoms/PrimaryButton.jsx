import React from "react";

const PrimaryButton = ({
  label,
  btnColor = "#db0011",
  onClick,
  type = "button",
  style = {},
  width = "200px",
}) => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <button
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
