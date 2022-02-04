import React from "react";
import { NavLink } from "react-router-dom";
import { Nav } from "reactstrap";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
import Home from "./pages/Home";
import Reports from "./pages/Reports";
import Statistics from "./pages/Statistics";

import logo from "logo.svg";

var ps;

export function Sidebar(props) {
  const sidebar = React.useRef();
  // verifies if routeName is the one active (in browser input)
  const activeRoute = (routeName) => {
    return props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  };
  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(sidebar.current, {
        suppressScrollX: true,
        suppressScrollY: false,
      });
    }
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
      }
    };
  });
  return (
    <div
      className="sidebar"
      data-color={props.bgColor}
      data-active-color={props.activeColor}
    >
      <div className="logo">
        <a
          href="https://www.creative-tim.com"
          className="simple-text logo-mini"
        >
          <div className="logo-img">
            <img src={logo} alt="react-logo" />
          </div>
        </a>
        <a
          href="https://www.creative-tim.com"
          className="simple-text logo-normal"
        >
          TTHubs
        </a>
      </div>
      <div className="sidebar-wrapper" ref={sidebar}>
        <Nav>
          <li>
            <NavLink to="/" className="nav-link" activeClassName="active">
              Home
              <i className="nc-icon nc-layout-11" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/statistics" className="nav-link" activeClassName="active">
              Statistics
              <i className="nc-icon nc-sound-wave" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/reports" className="nav-link" activeClassName="active">
              Reports
              <i className="nc-icon nc-single-copy-04" />
            </NavLink>
          </li>
          );
        </Nav>
      </div>
    </div>
  );
}

