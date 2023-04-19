import React from "react";
import ExitButton from "./ExitButton";
import './Cards.css';
import img from '../assets/images/venus.png'



const Cards = () => {


  return (
  
  
<div className="container-cards">

{/* <ExitButton /> */}

<h1 className="title">Venus</h1>

<ExitButton />

<h2 className="description">Planete tellurique</h2>


<div className="image-container">
<img src={img} className="planet-image" alt="venus"/>
</div>

<p className="presentation">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
Minus, maxime recusandae soluta, at 
</p>

    <div className="moons">

      <div className="moon-desc">
        <p> fufsgb</p>
      </div>

      <div className="facts">
        <p> fugfsg</p>
      </div>

    
    </div>


</div>


)};

export default Cards;
