import { Link } from 'react-router-dom';
import React from 'react'
import mercury from '../../assets/images/Mercury.png'


const NavbarItems = () => {
  return (
    <div className='image-container'>
      <Link to='/cards'><img src={mercury} alt='mercury' /></Link>
    </div>
  )
}

export default NavbarItems