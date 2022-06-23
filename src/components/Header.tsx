import React from "react";

import { NavLink } from "react-router-dom";

export const Header: React.FC = () => {
  return (
    <header>
      <nav className="navbar" role="navigation" aria-label="main navigation">

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <NavLink to='/home' className="navbar-item">
              Home
            </NavLink>

            <NavLink to='/tabs' className="navbar-item">
              Tabs
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  )
}
