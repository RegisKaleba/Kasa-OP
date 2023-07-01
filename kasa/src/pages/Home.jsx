import React from 'react';
import '../styles/Home.css';
import Thumbnails from '../components/Thumbnails.jsx';

import logo2 from '../assets/kasaLogo.svg';

import background from '../assets/background_kasa2.png';
import ImgTitle from '../components/ImgTitle';
import Banner from '../components/Banner';

function Home() {
  return (
    <React.StrictMode>

      <Banner>
        <div className='banner-nav'>
        <img src={logo2} alt="le logo Kasa" className="kasa-logo" />
		</div>
		<div class='linkNav'>
		<a href="/" class='link-nav-1 '>Accueil</a>
        <a href="/" class='link-nav-2 '>À Propos</a>
		</div>
      </Banner>

      <ImgTitle background={background} textH1="Chez vous, partout et ailleurs" />

      <Thumbnails />
      
    </React.StrictMode>
  );
}

export default Home;