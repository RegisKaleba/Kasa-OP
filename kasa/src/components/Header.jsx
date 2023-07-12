import React from 'react';
import Banner from './Banner';
import logo2 from '../assets/kasaLogo.svg';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <Banner>
      <div className='banner-nav'>
        <img src={logo2} alt="le logo Kasa" className="kasa-logo" />
      </div>
      <div className='linkNav'>
      <NavLink exact="true" to="/" activeclassname="active" className="link-nav-1">Accueil</NavLink>
      <NavLink exact="true" to="/about" activeclassname="active" className="link-nav-2">À Propos</NavLink>

      </div>
    </Banner>
  );
}

export default Header;
