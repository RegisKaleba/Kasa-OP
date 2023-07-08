import React from 'react';
import '../styles/HousingEntitled.css'

function HousingEntitled({ title, location, tags }) {
  return (
    <div className="housing-entitled">
      <h2 class='orange'>{title}</h2>
      <p class='orange'>{location}</p>
      <ul class='tag-list'>
        {tags.map((tag, index) => (
          <li key={index}>{tag}</li>
        ))}
      </ul>
    </div>
  );
}

export default HousingEntitled;