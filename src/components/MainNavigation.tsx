import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

export const MainNavigation: React.FC = () => {
  const [homeClick, setHomeClick] = useState(false);
  const [tabsClick, setTabsClick] = useState(false);

  const homeHandle = () => {
    setHomeClick(true);
    setTabsClick(false);
  };

  const tabsHandle = () => {
    setTabsClick(true);
    setHomeClick(false);
  };

  return (
    <nav className="navbar is-large">
      <div className="navbar-menu">
        <NavLink
          to="/"
          onClick={homeHandle}
          className={classNames(
            'navbar-item is-tab',
            {
              'is-active': homeClick,
            },
          )}
        >
          Home
        </NavLink>

        <NavLink
          to="/tabs"
          onClick={tabsHandle}
          className={classNames(
            'navbar-item is-tab',
            {
              'is-active': tabsClick,
            },
          )}
        >
          Tabs
        </NavLink>
      </div>
    </nav>
  );
};
