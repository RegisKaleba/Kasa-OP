import React from 'react';
import '../styles/HousingEntitled.scss'

function HousingEntitled({ title, location, tags }) {
  return (
    <div className="housing-entitled">
      <h2 className='orange'>{title}</h2>
      <p className='orange'>{location}</p>
      <ul className='tag-list'>
        {tags.map((tag, index) => (
          <li key={index}>{tag}</li>
        ))}
      </ul>
    </div>
  );
}

export default HousingEntitled;