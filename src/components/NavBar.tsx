import { PageNavLink } from './PageNavLink';

export const NavBar = () => (
  <div className="navbar-brand">
    <PageNavLink to="/" text="Home" />
    <PageNavLink to="/tabs" text="Tabs" />
  </div>
);
