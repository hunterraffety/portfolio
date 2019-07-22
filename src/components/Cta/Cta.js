// dependencies
import React from 'react';

// components
import Navigation from '../Navigation/Navigation';
import HeaderContent from '../HeaderContent/HeaderContent';

export default function Cta() {
  return (
    <div className='content'>
      <header className='cta-header'>
        <div className='header_bg' />
        <Navigation />
        <HeaderContent />
      </header>
      <div className='cta-container'>
        <i className='fab fa-js-square fa-5x' />
        <i className='fab fa-react fa-5x' />
        <i className='fab fa-node fa-5x' />
      </div>
    </div>
  );
}
