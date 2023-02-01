import React, { memo } from 'react';
import { PageNavLink } from '../PageNavLink/PageNavLink';

export const NavBar: React.FC = memo(() => (
  <div className="navbar-brand">
    <PageNavLink to="/" text="Home" />
    <PageNavLink to="/tabs" text="Tabs" />
  </div>
));
