import React, { memo } from 'react';
import { NavItem } from './NavItem';

export const Navigation: React.FC = memo(() => (
  <div className="navbar-brand">
    <NavItem
      to="/"
      title="Home"
    />

    <NavItem
      to="tabs"
      title="Tabs"
    />
  </div>
));
