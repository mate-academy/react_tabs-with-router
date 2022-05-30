import classNames from 'classnames';
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Navigation.scss';

export const Navigation: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <nav className="Navigation__navbar">
      <div className="Navigation__container">
        <NavLink
          to="/"
          end
          className={classNames(
            'Navigation__item',
            {
              'Navigation__item--active': pathname === '/',
            },
          )}
        >
          Home
        </NavLink>
      </div>
      <div className="Navigation__container">
        <NavLink
          to="tabs"
          className={classNames(
            'Navigation__item',
            {
              'Navigation__item--active': pathname >= '/tabs',
            },
          )}
        >
          Tabs
        </NavLink>
      </div>
    </nav>
  );
};
