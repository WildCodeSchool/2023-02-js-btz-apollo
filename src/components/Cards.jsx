import React from "react";
import ExitButton from "./ExitButton";
import './Cards.css';
import img from '../assets/images/venus.png'




const Cards = () => {


  return (<>
    <div className="cards">
  
      <div className="container-title" >
        <h1 className="title">Venus  <ExitButton /></h1>
        <div className="exit-button">
      </div>
        <h2 className="description">Planete tellurique</h2>
      </div>



      <div className="planet-image" >
        <img src={img} alt="venus" />
      </div>
      <p className="presentation">Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Minus, maxime recusandae soluta, at
      </p>
      <div className="moon-container">
        <div className="moons">
          <div className="moon-title">
            <h2> Moon</h2>
          </div>
          <div className="moons-desc">
            <p>blabla</p>
          </div>
        </div>

        <div className="facts">
          <div className="facts-title">
            <h2> Infos</h2>
          </div>
          <div className="facts-description">
            <p>blabla</p>
          </div>
        </div>

        <div className="text-container">
        </div>
      </div>
    </div>
  </>
  )
};

export default Cards;
