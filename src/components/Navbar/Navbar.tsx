import { CustomNavLink } from '../customNavLink';

export const Navbar = () => {
  return (
    <nav
      className="
      navbar
      is-light
      is-fixed-top
      is-mobile
      has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <CustomNavLink to="/" text="Home" />
          <CustomNavLink to="/tabs" text="Tabs" />
        </div>
      </div>
    </nav>
  );
};
//
