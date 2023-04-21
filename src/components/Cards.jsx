import { Link } from "react-router-dom";
import React from 'react';
import ExitButton from './ExitButton';
import './Cards.css';


const Cards = ({ planet }) => {
  return (

    <div className='cards'>
      <div className='container-title'>
        <h1 className='title'>
          {planet.englishName}
          <Link to= '/'><ExitButton /></Link>
        </h1>
        <h2 className='description'>{planet.bodyType}</h2>
      </div>

      <div className='planet-image'>
        <img
          src={planet.image}
          alt={planet.englishName}
        />
      </div>
      <div className='bot-card'>
        <p className='presentation'>{planet.englishDescription}</p>
        <h5>{planet.englishName} - Présentation</h5>
        <div className='moon-container'>
          <div className='moons'>
            <div className='moon-title'>
              <h2> Moons</h2>
            </div>
            <div className='moons-desc'>
              <p>
                blabla <br />
                blablou <br />
                blabla <br />
                blablou
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
