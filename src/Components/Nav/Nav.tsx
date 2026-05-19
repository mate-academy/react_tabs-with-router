import classNames from 'classnames';

import React from 'react';
import { NavLink } from 'react-router-dom';

const getLinkClass = ({ isActive }: { isActive: boolean }) =>
  classNames('navbar-item', {
    'is-active': isActive,
  });

export const Nav: React.FC = () => (
  <div className="navbar-brand">
    <NavLink to="/" className={getLinkClass}>
      Home
    </NavLink>

    <NavLink to="/tabs" className={getLinkClass}>
      Tabs
    </NavLink>
  </div>
);
