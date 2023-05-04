import { useState } from 'react'
import Aplogo from '../assets/images/logo-apollo.png'
import './Home.css'

const Home = () => {

    const[open,setOpen] = useState(true)

    const homeClosing =()=>{
        setOpen(false)
    }

  return (
    
      <>
      {open ?
    <div className='home-container'>
        <div className='card-container'>
            <span className='exit'
                    onClick={homeClosing}
                    >X</span>

            <h1>Welcome to Apollo adventurer</h1>

            <div className='main-text-container'>
                <h2>
                    Here you will find the instructions to travel across our amazing galaxy and discover facts about
                    the planets and much more.<br/>
                    So don't be shy and explore the whole galaxy to learn them all !
                </h2>
                <p>
                    On the bottom of the screen you will find a shortcut navigation bar. Just pass the mouse
                    over the planets to unveil theire names. You can also double click on the planet you want to reach her.<br/>
                    If you you want change your viewpoint, scroll down to zoom out or up to zoom. Finally, with the right click you can move
                    wherever you want.<br/>
                </p>
                <h2>
                Now it's your turn, enjoy your travel and get lost in the infinite Cosmos !
                </h2>
            </div>
            <div className='home-footer'>
                <div className='team'>
                <span>Apollo crew :</span>
                    <ul>
                        <li>Audrey</li>
                        <li>J.L.P</li>
                        <li>PeePooDoo</li>
                        <li>Fennec-Tourmenté</li>
                    </ul>
                </div>
                <div className='logo-container'>
                    <img src={Aplogo} alt="logo-Apollo" />
                </div>

            </div>
        </div>
        </div>
    : null }
    </>
  )
}

export default Home