import { NavigationLink } from './NavigationLink';

export const Nav = () => (
  <nav
    className="navbar is-light is-fixed-top is-mobile has-shadow"
    data-cy="Nav"
  >
    <div className="container">
      <div className="navbar-brand">
        <NavigationLink to="/" linkText="Home" />
        <NavigationLink to="/tabs" linkText="Tabs" />
      </div>
    </div>
  </nav>
);
