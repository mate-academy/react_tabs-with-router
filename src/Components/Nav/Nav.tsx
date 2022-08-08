import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

export const Nav: React.FC = React.memo(() => {
  return (
    <nav className="navbar is-fixed-top has-background-light" data-cy="nav">
      <div className="navbar-menu">
        <ul className="navbar-start">
          <li className="navbar-item">
            <NavLink
              className={(navData) => (classNames(
                'navbar-item',
                {
                  'is-active': navData.isActive,
                },
              ))}
              to="/"
            >
              Home
            </NavLink>
          </li>

          <li className="navbar-item">
            <NavLink
              className={(navData) => (classNames(
                'navbar-item',
                {
                  'is-active': navData.isActive,
                },
              ))}
              to="/tabs"
            >
              Tabs
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
});
