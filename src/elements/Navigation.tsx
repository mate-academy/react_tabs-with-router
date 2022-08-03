import classNames from 'classnames';
import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navigation: React.FC = () => {
  const getLinkClass = ({ isActive }: { isActive: boolean }) => {
    return isActive;
  };

  return (
    <nav className="navbar is-fixed-top has-background-light" data-cy="nav">
      <div className="navbar-menu">
        <div className="navbar-start">
          <NavLink
            to="/"
            className={classNames('navbar-item', { 'is-active': getLinkClass })}
          >
            Home
          </NavLink>
          <NavLink
            to="/tabs"
            className={classNames('navbar-item', { 'is-active': getLinkClass })}
          >
            Tabs
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
