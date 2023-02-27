import React from 'react'
import './Navbar.css';
import SwipeableTemporaryDrawer from '../SideBar';

const Navbar = () => {
  return (
    <div className='navbar'>
      <span><SwipeableTemporaryDrawer /></span>
      <img src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png" alt="logo" height={60}/>
    </div>
  )
}

export default Navbar