import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './Footer';
import Error from '../pages/Error';
import Home from '../pages/Home.jsx';
import About from '../pages/About.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;