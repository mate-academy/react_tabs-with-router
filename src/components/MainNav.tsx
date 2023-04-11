import { PageNavLink } from './PageNavLink';

export const MainNav = () => {
  return (
    <nav
      data-cy="Nav"
      className="
        navbar
        is-light
        is-fixed-top
        is-mobile has-shadow
      "
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <PageNavLink to="/" text="Home" />
          <PageNavLink to="tabs" text="Tabs" />
        </div>
      </div>
    </nav>
  );
};
