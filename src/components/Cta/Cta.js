// dependencies
import React from 'react';

// components
import About from '../About/About';
import Footer from '../Footer/Footer';
import HeaderContent from '../HeaderContent/HeaderContent';
import Navigation from '../Navigation/Navigation';
import Portfolio from '../Portfolio/Portfolio';
import Skills from '../Skills/Skills';

export default function Cta() {
  return (
    <div className='content'>
      <header className='cta-header' id='home'>
        <div className='header_bg' />
        <Navigation />
        <HeaderContent />
      </header>
      <About />
      <Portfolio />
      <Skills />
      <Footer />
    </div>
  );
}
