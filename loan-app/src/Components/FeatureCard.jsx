import React from 'react';
import '../Styles/featureCard.css'
const FeatureCard = ({ img, title, description }) => {
  return (
    <div className="card" style={{ width: '18rem', margin:'15px' }}>
      <img src={img} className="card-img-top card-img" style={{ width: '50px', height: 'auto' }} alt={title} />
      <div className="card-body">
        <h5 className="card-title" style={{color:"#97281d"}}>{title}</h5>
        <p className="card-text card-desciption">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
