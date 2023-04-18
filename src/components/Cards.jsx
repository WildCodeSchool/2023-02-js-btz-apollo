import React from "react";
import ExitButton from "./ExitButton";
import './Cards.css';
import img from '../assets/images/venus.png'



const Cards = () => {


  return (
  
  
<div className="Container-Cards">

<ExitButton />

<h1 className="Title">Venus</h1>

<h2 className="Description">Planete tellurique</h2>


<div className="image-container">
<img src={img} className="planet-image" alt="venus"/>
</div>

<p className="Presentation">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
Minus, maxime recusandae soluta, at necessitatibus alias officia
Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit necessitatibus 
officia qui voluptatum quos commodi 
sint omnis ducimus error neque iste itaque reiciendis 
velit id ut rerum, esse quas fuga.
</p>

    <div className="Moons">

      <div className="MoonDesc">
FBEZIQBFIQBGIBZQIBG
      </div>

      <div className="Facts">
BRHBGEUIQGBEQIGBI
      </div>

    
    </div>


</div>


)};

export default Cards;
