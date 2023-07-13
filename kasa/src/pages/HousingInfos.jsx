import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import HousingDetails from '../components/HousingDetails';
import HousingOwner from '../components/HousingOwner';
import HousingEntitled from '../components/HousingEntitled';
import HousingRatings from '../components/HousingRatings';
import logementsList from '../data/logements.json';
import Caroussel from '../components/Caroussel';
import '../styles/Caroussel.scss';
import '../styles/HousingInfos.scss';

function HousingInfo() {
  const { housingId } = useParams();
  const navigate = useNavigate();
  const [housingData, setHousingData] = useState(null);

  useEffect(() => {
    const housing = logementsList.find((item) => item.id === housingId);
    if (!housing) {
      navigate('/error');
    } else {
      setHousingData(housing);
    }
  }, [housingId, navigate]);

  if (!housingData) {
    return <p>Chargement en cours...</p>;
  }

  const pictures = housingData.pictures || []; // Vérification de la présence des images

  return (
    <div>
      <Header />

      <div className="cart-header">
        {pictures.length > 0 && <Caroussel pictures={pictures} />}
      </div>

      <div className="entitled-owner-container">
        <HousingEntitled
          title={housingData.title}
          location={housingData.location}
          tags={housingData.tags}
        />
        <div className='testo'>
          <HousingOwner
            name={housingData.host.name}
            picture={housingData.host.picture}
          />

        <div className='space'>
        <HousingRatings className="housing-ratings-container" rating={parseInt(housingData.rating)} />
        </div>
        </div>
        
      </div>

      <div className="housing-details-container">
        <HousingDetails
          description={housingData.description}
          equipments={housingData.equipments}
        />
      </div>
    </div>
  );
}

export default HousingInfo;