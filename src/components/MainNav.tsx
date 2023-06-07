import { NavPageLink } from './NavPageLink';

export const MainNav = () => {
  return (
    <nav
      className="
        navbar is-light is-fixed-top is-mobile has-shadow has-navbar-fixed-top"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavPageLink to="/" text="Home" />
          <NavPageLink to="/tabs" text="Tabs" />
        </div>
      </div>
    </nav>
  );
};
