import React from 'react';
import Banner from './Banner';
import logo2 from '../assets/kasaLogo.svg';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Banner>
      <div className='banner-nav'>
        <img src={logo2} alt="le logo Kasa" className="kasa-logo" />
      </div>
      <div className='linkNav'>
        <a href="/" className='link-nav-1'>Accueil</a>
        <Link to="/about" className='link-nav-2'>À Propos</Link>
      </div>
    </Banner>
  );
}

export default Header;