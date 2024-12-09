import React from "react";
import "../Styles/featureCard.css";
import { useNavigate } from "react-router-dom";

const FeatureCard = ({ img, title, description, btnText, link }) => {
  const navigate = useNavigate();

  const handleClick = (btnLink) => {
    navigate(btnLink);
  };

  return (
    <div className="container card feature-card">
      <div class="card">

<div class="slide slide1">

    <div class="content">

        <div class="icon">

        <img
        src={img}
        className="card-img-top card-img"
        alt={title}
      />

        </div>

    </div>

</div>

<div class="slide slide2">

    <div class="content">

    <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        {btnText && (
          <button
            className="btn btn-danger mt-auto feature-card-button"
            onClick={() => handleClick(link)}
          >
            {btnText}
          </button>
        )}
      </div>
    </div>
</div>
</div>
      {/* <img
        src={img}
        className="card-img-top card-img"
        alt={title}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        {btnText && (
          <button
            className="btn btn-danger mt-auto feature-card-button"
            onClick={() => handleClick(link)}
          >
            {btnText}
          </button>
        )}
      </div> */}
    </div>
    
  );
};

export default FeatureCard;

