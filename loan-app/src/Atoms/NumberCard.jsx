import React from "react";
import "../Styles/numberCard.css";

const NumberCard = ({ title, value, imgUrl }) => {
  return (
    <div>
      <div className="card number-card">
        <div className="card-body">
          <img src={imgUrl} alt="icon" className="top-right-img" />
          <h5 className="card-text">{value}</h5>
          <p className="card-title">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default NumberCard;
