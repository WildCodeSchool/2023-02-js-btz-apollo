import React from 'react';
import Inflogo from '../../assets/images/icone-info.jpg';
import './Info.css';

const Info = () => {
  return (
    <div className='info-container'>
      <img
        src={Inflogo}
        alt='logo-info'
      />
    </div>
  );
};

export default Info;
