import classNames from 'classnames';
import React from 'react';
import { NavLink } from 'react-router-dom';

const getIsActive = ({ isActive }: { isActive: boolean }) =>
  classNames('navbar-item', { 'is-active': isActive });

export const Header = () => (
  <>
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavLink to="" className={getIsActive}>
            Home
          </NavLink>
          <NavLink to="tabs" className={getIsActive}>
            Tabs
          </NavLink>
        </div>
      </div>
    </nav>
  </>
);
