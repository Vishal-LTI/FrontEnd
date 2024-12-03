import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/accordion.css";

const Accordion = ({ title, description, color, bgColor, btnTitle, btnUrl }) => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  
  const handleClick = () => {
    setShow(!show);
  };
  
  const handleBtnClick = () => {
    navigate(btnUrl); // Ensure btnUrl is passed correctly
    console.log("url", btnUrl);
  };
  
  return (
    <div className="accordion" style={{ margin: "20px" }}>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className={`accordion-button ${show ? "" : "collapsed"}`}
            type="button"
            onClick={handleClick}
            style={{ background: bgColor, color: color }}
          >
            {title}
          </button>
        </h2>
        <div className={`accordion-collapse collapse ${show ? "show" : ""}`}>
          <div className="accordion-body">{description}</div>
          {btnTitle && (
            <button className="btn btn-success acc-btn" onClick={handleBtnClick}>
              {btnTitle}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
