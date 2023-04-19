import React from 'react'
import Scene from '../pages/Scene'
import {CgClose} from "react-icons/cg"

function ExitButton() {

  const [isClicked, setIsClicked] = useState(true)





  function handleClick(e) {
    e.preventDefault();
    console.log('Le lien a été cliqué.');
    

  }


  return (

    <div onClick={handleClick}>
        <CgClose />
    </div>
  )


}

export default ExitButton