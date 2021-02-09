import React, { useState } from 'react';
import Auth from "../../utils/auth";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Nav.css';
import { IconContext } from 'react-icons';


function Nav() {
  const [sidebar, setSidebar] = useState(false);
  
  const showSidebar = () => setSidebar(!sidebar);

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row user-div">
          <li className="mx-1 nav-text">
            <Link to="/orderHistory" 
            className='order-history'
            >
              Order History
            </Link>
          </li>
          <li className="mx-1 nav-text">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <Link to="/" onClick={() => Auth.logout()}>
              Logout
            </Link>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="flex-row user-div">
          <li className="mx-1 nav-text">
            <Link to="/signup">
              Signup
            </Link>
          </li>
          <li className="mx-1 nav-text">
            <Link to="/login">
              Login
            </Link>
          </li>
        </ul>
      );
    }
  }
  
  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <FaIcons.FaBars className='menu-bars' onClick={showSidebar} />
          <h1>
            <Link to='/' className='title'>Sneakerz-Seekerz</Link>
          </h1>
          <div>
            {showNavigation()}
          </div>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Nav;