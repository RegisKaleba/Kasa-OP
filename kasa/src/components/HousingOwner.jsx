import React from 'react';


function HousingOwner({ name, picture }) {
  return (
    <div className="housing-owner">
      <h3 className="owner-name">{name}</h3>
      <img className="owner-picture" src={picture} alt="Owner" />
    </div>
  );
}

export default HousingOwner;