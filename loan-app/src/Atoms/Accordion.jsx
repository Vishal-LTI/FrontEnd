import React, { useState } from "react";

const Accordion = ({ title, description , color, bgColor }) => {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };

  return (
    <div className="accordion" style={{ margin: "20px" }}>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className={`accordion-button ${show ? "" : "collapsed"}`}
            type="button"
            onClick={handleClick}
            style={{ background: `${bgColor}`, color: `${color}` }}
          >
            {title}
          </button>
        </h2>
        <div
          className={`accordion-collapse collapse ${show ? "show" : ""}`}
          
        >
          <div className="accordion-body">{description}</div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
