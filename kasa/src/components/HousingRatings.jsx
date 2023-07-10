import React from 'react';
import '../styles/HousingRatings.scss'
import redStar from '../assets/redStar.svg';
import greyStar from '../assets/greyStar.svg';

function HousingRatings({ rating }) {
  const redStarsCount = Math.min(rating, 5);
  const greyStarsCount = Math.max(5 - rating, 0);

  const redStars = Array(redStarsCount).fill(redStar);
  const greyStars = Array(greyStarsCount).fill(greyStar);

  const stars = [...redStars, ...greyStars];

  return (
    <div className="rating-stars">
      {stars.map((star, index) => (
        <img key={index} src={star} alt="star" />
      ))}
    </div>
  );
}

export default HousingRatings;