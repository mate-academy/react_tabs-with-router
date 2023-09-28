import classNames from 'classnames';
import React from 'react';
import { NavLink } from 'react-router-dom';

type Props = {
};

export const Navigation: React.FC<Props> = () => {
  const getLinkClass = ({ isActive }: { isActive: boolean }) => classNames(
    'navbar-item',
    { 'is-active': isActive },
  );

  return (
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavLink to="/" relative="path" className={getLinkClass}>
            Home
          </NavLink>

          <NavLink to="/tabs" className={getLinkClass}>
            Tabs
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
