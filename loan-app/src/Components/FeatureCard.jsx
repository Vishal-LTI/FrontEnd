import React from 'react';
import '../Styles/featureCard.css'
import { useNavigate } from 'react-router-dom';
const FeatureCard = ({ img, title, description, btnText, link }) => {
  const navigate = useNavigate()
  const handleClick = (btnLink) => {
    navigate(btnLink);
  };
  return (
    <div className="card" style={{ width: '18rem', margin:'15px' }}>
      <img src={img} className="card-img-top card-img" style={{ width: '50px', height: 'auto' }} alt={title} />
      <div className="card-body">
        <h5 className="card-title" style={{color:"#97281d"}}>{title}</h5>
        <p className="card-text card-desciption">{description}</p>
        {btnText ?
        <button className='btn btn-danger' style={{bottom:'0'}} onClick={() => handleClick(link)}>Calculate</button>
        :""}
      </div>
      
    </div>
  );
};

export default FeatureCard;
