import { CustomNavLink } from './CustomNavLink';

export const Nav = () => {
  return (
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <CustomNavLink to="/">Home</CustomNavLink>
          <CustomNavLink to="/tabs">Tabs</CustomNavLink>
        </div>
      </div>
    </nav>
  );
};
