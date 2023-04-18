import React from "react";
import ExitButton from "./ExitButton";
import './Cards.css';
import img from '../assets/images/venus.png'



const Cards = () => {


  return (
  
  
<div className="container-cards">

<ExitButton />

<h1 className="title">Venus</h1>

<h2 className="description">Planete tellurique</h2>


<div className="image-container">
<img src={img} className="planet-image" alt="venus"/>
</div>

<p className="presentation">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
Minus, maxime recusandae soluta, at necessitatibus alias officia
Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit necessitatibus 
officia qui voluptatum quos commodi 
sint omnis ducimus error neque iste itaque reiciendis 
velit id ut rerum, esse quas fuga.
</p>

    <div className="moons">

      <div className="moonDesc">
FBEZIQBFIQBGIBZQIBG
      </div>

      <div className="facts">
BRHBGEUIQGBEQIGBI
      </div>

    
    </div>


</div>


)};

export default Cards;
