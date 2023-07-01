import React from 'react';
import Banner from './Banner';
import logo2 from '../assets/kasaLogo.svg';
import ImgTitle from './ImgTitle';
import background from '../assets/background_kasa2.png';
import Footer from './Footer';
import About from '../pages/About.jsx';


function App() {
  return (
    <div>
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

    


      <About />
      <Footer />
    </div>
  );
}

export default App;