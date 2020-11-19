import React,{useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as faicon from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";
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

} from "reactstrap";

export const SidebarData=[

        {
            title: " About us",
            path:"/",
            icon:<FontAwesomeIcon icon={faicon.faInfoCircle}/>,
            cname:"nav-text"
        },
        {
            title:" Study Material",
            path:"/",
            icon:<FontAwesomeIcon icon={faicon.faBookOpen}/>,
            cname:"nav-text"
        },

        {
            title: " Announcement", 
            path:"/",
            icon:<FontAwesomeIcon icon={faicon.faBullhorn}/>,
            cname:"nav-text"
        },

        {
            title: " News and events",
            path:"/",
            icon:<FontAwesomeIcon icon={faicon.faCalendar}/>,
            cname:"nav-text"
        },

        {
            title: " Photos",
            path:"/",
            icon:<FontAwesomeIcon icon={faicon.faCamera}/>,
            cname:"nav-text"
        },
        {
            title: " Terms and condition",
            path:"/",
            icon:<FontAwesomeIcon icon={faicon.faLock}/>,
            cname:"nav-text"
        },
        {
            title: " Policies",
            path:"/",
            icon:<FontAwesomeIcon icon={faicon.faFill}/>,
            cname:"nav-text"
        },
        {
            title: " Settings",
            path:"/",
            icon:<FontAwesomeIcon icon={faicon.faCog}/>,
            cname:"nav-text"
        },

        {
            title: " Search",
            path:"/",
            icon:<FontAwesomeIcon icon={faicon.faSearch}/>,
            cname:"nav-text"
        }
    
    
    

];