import { PageNavLink } from '../PageNavLink';

export const Navigation = () => {
  return (
    <nav
      data-cy="Nav"
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <PageNavLink to="/" title="Home" />

          <PageNavLink to="/tabs" title="Tabs" />
        </div>
      </div>
    </nav>
  );
};
