import React from 'react';

const TitleCard = ({ title, children}) => {
  return (
    <div>
        <div className="mb-4">
        <h5 className="title">{title}</h5>

        <div className="row">
            {children}
        </div>
        </div>
    </div>
  );
};

export default TitleCard;
