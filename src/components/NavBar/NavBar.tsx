import { FC } from 'react';
import { PageNavLink } from '../PageNavLink';
import { navLinks } from '../../constants';

export const NavBar: FC = () => {
  return (
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >

      <div className="container">
        <div className="navbar-brand">
          {navLinks.map(navLink => (
            <PageNavLink
              path={navLink.path}
              text={navLink.title}
              className="navbar-item"
            />
          ))}
        </div>
      </div>
    </nav>
  );
};
