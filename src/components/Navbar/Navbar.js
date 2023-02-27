import React from 'react'
import './Navbar.css';
import SwipeableTemporaryDrawer from '../SideBar';

const Navbar = ({ setCategory }) => {
  return (
    <div className='navbar'>
      <span><SwipeableTemporaryDrawer setCategory={setCategory}/></span>
      <img src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png" alt="logo" height={60}/>
    </div>
  )
}

export default Navbar