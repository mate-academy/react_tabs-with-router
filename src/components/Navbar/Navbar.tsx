import { FC } from 'react';
import { PageNavLink } from '../PageNavLink';
import { PATH } from '../../types';

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
        <PageNavLink to={PATH.Main} title="Home" />

        <PageNavLink to={PATH.Tabs} title="Tabs" />
      </div>
    </div>
  </nav>
);
