import React from 'react';
import Thumbnails from '../components/Thumbnails.jsx';
import background from '../assets/background_kasa3.png';
import Header from '../components/Header'
import ImgTitle from '../components/ImgTitle';


function Home() {
  return (
    <React.StrictMode>

      <Header />
      <ImgTitle background={background} textH1="Chez vous, partout et ailleurs" />
      <Thumbnails />
      
    </React.StrictMode>
  );
}

export default Home;