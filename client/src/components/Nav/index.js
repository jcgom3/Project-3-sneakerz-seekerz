import React, { useState } from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Nav.css';
import { IconContext } from 'react-icons';
// import LandingPage from '../LandingPage';
// import { Button, Modal } from 'react-bootstrap';

function Nav() {
    const [sidebar, setSidebar] = useState(false);
  
    const showSidebar = () => setSidebar(!sidebar);

    // const dispatch = useDispatch();

    // const [smShow, setSmShow] = useState(false);
    // const [lgShow, setLgShow] = useState(false);

    // const handleHomePage = () => {
    //   dispatch({
    //     location: 
    //   })
    // }
  
    return (
      <>
        <IconContext.Provider value={{ color: '#fff' }}>
          <div className='navbar'>
            {/* <Link to='' className='menu-bars'> */}
              <FaIcons.FaBars className='menu-bars' onClick={showSidebar} />
            {/* </Link> */}
            <h1><Link to='/' className='title'>Sneakerz-Seekerz</Link></h1>
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
            {/* <Button onClick={() => setLgShow(true)}>Sign-up</Button>
            <Modal
          size="lg"
          show={lgShow}
          onHide={() => setLgShow(false)}
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
              Sign-Up below
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>...</Modal.Body>
        </Modal> */}
          </nav>
        </IconContext.Provider>
      </>
    );
  }

export default Nav;