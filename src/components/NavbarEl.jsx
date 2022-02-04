import React, { useState, useRef } from "react";
import { IconContext } from "react-icons";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import { SidebarData } from "./SidebarData";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container,
  InputGroup,
  InputGroupText,
  InputGroupAddon,
  Input,
} from "reactstrap";

export function NavbarEl() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const sidebarToggle = useRef();

  const openSidebar = () => {
    document.documentElement.classList.toggle("nav-open");
    sidebarToggle.current.classList.toggle("toggled");
  };

  return (
    <Container fluid>
      <Navbar
        color="dark"
        expand="lg"
        className={sidebar ? "nav-menu active" : "nav-menu"}
      >
        <div className="navbar-wrapper">
          <div className="navbar-toggle">
            <button
              type="button"
              ref={sidebarToggle}
              className="navbar-toggler"
              onClick={() => openSidebar()}
            >
              <span className="navbar-toggler-bar bar1" />
              hey
              <span className="navbar-toggler-bar bar2" />
              <span className="navbar-toggler-bar bar3" />
            </button>
            <Link to="#pablo" className="menu-bars">
              <FaIcons.FaBars onClick={showSidebar} />
            </Link>

            <ul className="nav-menu-items">
              <li className="navbar-toggle">
                <Link to="#" className="menu-bars">
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
          </div>
        </div>
      </Navbar>
    </Container>
  );
}
