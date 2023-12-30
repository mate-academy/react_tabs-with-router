import classNames from 'classnames';
import React from 'react';
import { NavLink } from 'react-router-dom';

export const Nav: React.FC = () => {
  const getNavLinkClasses = ({ isActive }: { isActive: boolean }) => (
    classNames('navbar-item', { 'is-active': isActive })
  );

  return (
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavLink to="/" className={getNavLinkClasses}>Home</NavLink>
          <NavLink to="/tabs" className={getNavLinkClasses}>Tabs</NavLink>
        </div>
      </div>
    </nav>
  );
};
