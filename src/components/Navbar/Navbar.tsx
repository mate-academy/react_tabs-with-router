import { NavbarLink } from '../NavbarLink';

export const Navbar = () => {
  return (
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavbarLink link="/" title="Home" />

          <NavbarLink link="/tabs" title="Tabs" />
        </div>
      </div>
    </nav>
  );
};
