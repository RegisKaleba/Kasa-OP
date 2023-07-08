import React from 'react';
import '../styles/Thumbnails.css';
import logementsList from '../data/logements.json';
import { Link } from 'react-router-dom';

function Thumbnails() {
  const locations = logementsList;

  return (
    <div className='wrapper'>
      <div className='grid'>
        {locations.map((location) => (
          <Link to={`/housing-info/${location.id}`} key={location.id} className='card'>
            <div className='image-container'>
              <img src={location.cover} alt={location.title} className='thumbnail-image' />
              <div className='thumbnail-title'>{location.title}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Thumbnails;