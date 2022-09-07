import { PageNavLink } from "../PageNavLink/PageNavLink";

export const Navigation = () => {
  return (
    <nav className="navbar is-fixed-top has-background-light" data-cy="nav">
    <div className="navbar-menu">
      <div className="navbar-start">
        <PageNavLink to="/" text="Home" />
        <PageNavLink to="/tabs" text="Tabs" />
      </div>
    </div>
  </nav>
  );
};
