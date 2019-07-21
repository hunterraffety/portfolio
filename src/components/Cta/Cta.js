// dependencies
import React from 'react';

// components
import Navigation from '../Navigation/Navigation';
import HeaderContent from '../HeaderContent/HeaderContent';

export default class Cta extends React.Component {
  render() {
    return (
      <div className='content'>
        <header className='cta-header'>
          <div className='header_bg' />
          <Navigation />
          <HeaderContent />
        </header>
        <div className='cta-container'>
          <i className='fab fa-react fa-5x' />
          <span className='fas fa-camera fa-5x' />
          <span className='fab fa-react fa-5x' />
        </div>
      </div>
    );
  }
}
