import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.scss';

export const Navigation: React.FC = () => {
  return (
    <nav className="Navigation__navbar">
      <div className="Navigation__container">
        <NavLink
          to="/"
          end
          className={({ isActive }) => (isActive
            ? 'Navigation__item--active'
            : 'Navigation__item'
          )}
        >
          Home
        </NavLink>
      </div>
      <div className="Navigation__container">
        <NavLink
          to="tabs"
          className={({ isActive }) => (isActive
            ? 'Navigation__item--active'
            : 'Navigation__item'
          )}
        >
          Tabs
        </NavLink>
      </div>
    </nav>
  );
};
