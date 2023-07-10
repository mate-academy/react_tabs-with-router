import { FC } from 'react';
import { TabsNavLink } from '../TabsNavLink';

export const MainNav: FC = () => {
  return (

    <nav
      className="navbar is-light is-fixed-top is-mobile
      has-shadow has-navbar-fixed-top"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <TabsNavLink to="/" text="Home" />

          <TabsNavLink to="/tabs" text="Tabs" />
        </div>
      </div>
    </nav>
  );
};
