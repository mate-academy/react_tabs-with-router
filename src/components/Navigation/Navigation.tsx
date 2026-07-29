import React from 'react';
import { NavLink, NavLinkRenderProps } from 'react-router-dom';

const NAV_ITEMS = [
  { path: '/', label: 'Home' },
  { path: '/tabs', label: 'Tabs' },
] as const;

const getClassName = ({ isActive }: NavLinkRenderProps) => {
  return isActive ? 'navbar-item is-active' : 'navbar-item';
};

export const Navigation: React.FC = () => {
  return (
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          {NAV_ITEMS.map(({ path, label }) => (
            <NavLink key={path} to={path} className={getClassName}>
              {label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};
