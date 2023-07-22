import classNames from 'classnames';
import React from 'react';
import { NavLink } from 'react-router-dom';

const classes = ({ isActive }: { isActive: boolean }) => (
  classNames('navbar-item', { 'is-active': isActive })
);

export const Nav: React.FC = () => {
  return (
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavLink to="/" className={classes}>Home</NavLink>
          <NavLink to="/tabs" className={classes}>Tabs</NavLink>
        </div>
      </div>
    </nav>
  );
};
