import { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import "./ExitButton.css"

 
 const ExitButton = () => {
  const [card, setCard] = useState()
  const [exit, setExit] = useState(false)

  useEffect(() => {
    axios
    .get('./https://apollo-api.martinnoel.fr/solar-system/solar-system')
    .then((res) => setCard(res.data))
}, []);

const toggleFilter = () => {
  setExit(!exit)
};

   return (
     <div onClick={toggleFilter}>{exit ? <Link to='/'></Link>: 'X'}</div>
   )
 }
 
 export default ExitButton
