import { FC } from 'react';
import { PageNavLink } from '../PageNavLink';
import { RoutePath } from '../../utils/constants';

export const Navbar: FC = () => (
  <nav
    data-cy="Nav"
    className="
    navbar
     is-light
     is-fixed-top
     is-mobile
     has-shadow"
  >
    <div className="container">
      <div className="navbar-brand">
        <PageNavLink to={RoutePath.main} title="Home" />

        <PageNavLink to={RoutePath.tabs} title="Tabs" />
      </div>
    </div>
  </nav>
);
