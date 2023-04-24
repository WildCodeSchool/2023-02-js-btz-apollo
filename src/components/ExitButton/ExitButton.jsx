import { useState} from 'react';
import { Link } from 'react-router-dom';
import "./ExitButton.css"

 
const ExitButton = () => {

const [exit, setExit] = useState(false)

const toggleFilter = () => {
  setExit(!exit)
};

   return (
     <div onClick={toggleFilter}>{exit ? <Link to='/'></Link>: 'X'}</div>
   )
 }
 
 export default ExitButton
