import React from 'react';
import '../styles/HousingDetails.css';
import Dropdown from './Dropdown';

function HousingDetails(props) {
  const { description, equipments } = props;

  const dropdownContent = [
    {
      h4: 'Description',
      article: [description],
    },
    {
      h4: 'Équipements',
      article: equipments,
    },
  ];

  return (
    <div className='details-container'>
      {dropdownContent.map((dropdown, index) => (
        <Dropdown key={`${dropdown.h4}-${index}`} dropdownContent={dropdown} />
      ))}
    </div>
  );
}

export default HousingDetails;