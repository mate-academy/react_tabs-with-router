import { CreateNavLink } from './CreateNavLink';

export const NavMain = () => (
  <nav
    className="navbar is-light is-fixed-top is-mobile has-shadow"
    data-cy="Nav"
  >
    <div className="container">
      <div className="navbar-brand">
        <CreateNavLink content="Home" reference="/" />
        <CreateNavLink content="Tabs" reference="/tabs" />
      </div>
    </div>
  </nav>
);
