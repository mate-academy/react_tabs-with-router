import { NavLinkPage } from '../NavLinkPage';

export const NavBar = () => (
  <div className="navbar-brand">
    <NavLinkPage to="/" text="Home" />
    <NavLinkPage to="/tabs" text="Tabs" />
  </div>
);
