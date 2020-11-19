import React,{useState} from 'react';
import Sidenav from './Sidenav';
//import { NavLink as Link } from 'react-router-dom';
import './Navbar.css';
import {
Nav,
NavLink,
Navbar,
Collapse,
DropdownToggle,
DropdownMenu,
NavbarText,
NavbarBrand,
NavItem,
UncontrolledDropdown,
NavbarToggler

} from 'reactstrap';

const Navbar1 = (props)=>{

return(
  <>
              <Navbar expand="sm" fixed="top" className="nav_bar">
              <NavbarBrand tag={NavLink} to="/" className="menubar">
                <Sidenav/>
                {/*<span className="brand-title">
                  <Translate contentKey="global.title">Risingarjun</Translate>
                </span>
                <span className="navbar-version">{appConfig.VERSION}</span>*/}
              </NavbarBrand>

              <Nav id="header-tabs">
               <NavItem>

                  <NavLink href="/" className="d-flex align-items-center" > Courses</NavLink>
               </NavItem>
              <NavItem>
                <NavLink href="/Results">
                  Results
                  </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='/ContactUs'>
                <span>
                  Contact us
                  </span>
              </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/SignIn" exact activeClassName="active_nav" >
                <span>
                  Sign in
                  </span>
                  </NavLink>
              </NavItem>
              </Nav>
              </Navbar>
        </>
);
}

export default Navbar1;
