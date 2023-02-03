import { FC, memo } from 'react';
import { TemplateNavLink } from './TemplateNavLink';

export const Navbar: FC = memo(() => {
  return (
    <nav
      className="navbar is-light is-fixed-top is-mobile
      has-shadow has-navbar-fixed-top"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <TemplateNavLink to="/" textToDisplay="Home" />
          <TemplateNavLink to="/tabs" textToDisplay="Tabs" />
        </div>
      </div>
    </nav>
  );
});
