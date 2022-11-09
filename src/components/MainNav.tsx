import { PageNavLink } from './PageNavLink';

export const MainNav = () => (
  <div className="container">
    <div className="navbar-brand">
      <PageNavLink
        to="/"
        text="Home"
      />
      <PageNavLink
        to="/tabs"
        text="Tabs"
      />
    </div>
  </div>
);
