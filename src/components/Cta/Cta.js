// dependencies
import React from 'react';

// components
import Navigation from '../Navigation/Navigation';

// styles
import './Cta.scss';

export default class Cta extends React.Component {
  render() {
    return (
      <div className='content'>
        <header>
          <div className='header_bg' />
          <Navigation />
          <div className='cta-container'>
            <h1>test</h1>
          </div>
        </header>
      </div>
    );
  }
}
