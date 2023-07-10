import { NavPageLink } from './NavPageLink';

export const NavBar = () => (
  <nav
    className="navbar is-light is-fixed-top is-mobile has-shadow"
    data-cy="Nav"
  >
    <div className="container">
      <div className="navbar-brand">
        <NavPageLink directTo="/">Home</NavPageLink>
        <NavPageLink directTo="/tabs">Tabs</NavPageLink>
      </div>
    </div>
  </nav>
);
