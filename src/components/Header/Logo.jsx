import React from 'react';
import Aplogo from '../../assets/images/logo-apollo-blc.png';
import './Logo.css';

const Logo = () => {
  return (
    <div className='logo-container'>
      <img
        src={Aplogo}
        alt='logo-apollo'
      />
    </div>
  );
};

export default Logo;
