/*eslint-disable*/
import classNames from "classnames";
import React from "react";
import { NavLink } from "react-router-dom";

/* Also requires <html class="has-navbar-fixed-top"> */

const getLinkClass = ({ isActive }: { isActive: boolean }) =>
  classNames({ "navbar-item": true, "is-active": isActive });

export const NavBar: React.FC = () => {
  return (
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavLink to="/" className={getLinkClass}>
            Home
          </NavLink>
          <NavLink to="/tabs" className={getLinkClass}>
            Tabs
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
