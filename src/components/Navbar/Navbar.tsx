import React from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';

const getLinkClasses = ({ isActive }: { isActive: boolean }) => {
  return cn('navbar-item', { 'is-active': isActive });
};

const Navbar: React.FC = () => {
  return (
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavLink to="/" className={getLinkClasses}>
            Home
          </NavLink>

          <NavLink to="/tabs" className={getLinkClasses}>
            Tabs
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
