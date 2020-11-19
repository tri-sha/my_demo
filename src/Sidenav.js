import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars,faArrowDown} from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'reactstrap';
import { SidebarData } from './SidebarData';
import './Sidenav.css';
//import {NavLink} from 'react-router-dom';

function Sidenav(){
    const [sidebar, setSidebar] = useState(false);
                                                                                                                                                      
    const showSidebar = () => setSidebar(!sidebar);
  
    return (
      <>
       {/* <IconContext.Provider value={{ color: '#fff' }}>*/}
          <div className="navbar">
            <NavLink href='#' className='menu-bars'>
              <FontAwesomeIcon icon={faBars} onClick={showSidebar} />
            </NavLink>
          </div>
          <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items' onClick={showSidebar}>
              <div className='navbar-toggle'>
                <NavLink className='menu-bars'>
                  {/*<FontAwesomeIcon icon={faArrowDown}/>*/}
                 <div id="menutext"> Rising Arjun</div>
                </NavLink>
                <hr/>
              </div>
              {SidebarData.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <NavLink href={item.path} className="nav-text">
                      {item.icon}
                      {item.title}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </nav>
      </>
    );
  }
  
  export default Sidenav;