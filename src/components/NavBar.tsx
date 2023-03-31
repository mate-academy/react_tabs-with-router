import { NavItem } from './NavItem';

export const NavBar:React.FC = () => {
  return (
    <nav
      className="navbar is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavItem to="/" linkname="Home" />
          <NavItem to="/tabs" linkname="Tabs" />
        </div>
      </div>
    </nav>
  );
};
