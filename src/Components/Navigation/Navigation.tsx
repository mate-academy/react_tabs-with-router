import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

export const Navigation: React.FC = React.memo(() => {
  return (
    <ul className="nav nav-pills">
      <li className="nav-item">
        <NavLink
          className={(navData) => (classNames(
            'nav-link',
            {
              active: navData.isActive,
            },
          ))}
          to="/"
        >
          Home
        </NavLink>
      </li>

      <li className="nav-item">
        <NavLink
          className={(navData) => (classNames(
            'nav-link',
            {
              active: navData.isActive,
            },
          ))}
          to="/tabs"
        >
          Tabs
        </NavLink>
      </li>
    </ul>
  );
});
