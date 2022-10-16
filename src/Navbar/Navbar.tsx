import NavbarLink from '../NavbarLink';

export const Navbar = () => {
  return (
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavbarLink to="/" text="Home" />
          <NavbarLink to="/tabs" text="Tabs" />
        </div>
      </div>
    </nav>
  );
};
