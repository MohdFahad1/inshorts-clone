import React from 'react'
import './Navbar.css';
import SwipeableTemporaryDrawer from '../SideBar';
import { Link } from 'react-scroll';

const Navbar = ({ setCategory }) => {
  return (
    <div className='navbar'>
      <span><SwipeableTemporaryDrawer setCategory={setCategory}/></span>
      <Link activeClass="active"
      to="/"
     spy={true}
     smooth={true}
     offset={-100}
     duration={500}><img src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png" alt="logo" height={60} /></Link>
    </div>
  )
}

export default Navbar