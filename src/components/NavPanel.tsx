import React from 'react';

import { NavPanelItem } from './NavPanelItem';

export const NavPanel: React.FC = () => {
  return (
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavPanelItem link="/" text="Home" />
          <NavPanelItem link="/tabs" text="Tabs" />
        </div>
      </div>
    </nav>
  );
};
