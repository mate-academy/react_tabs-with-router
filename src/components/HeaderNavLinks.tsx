import { HeaderLink } from './HeaderLink';

export const HeaderNavLinks = () => {
  return (
    <nav
      // eslint-disable-next-line max-len
      className="navbar is-light is-fixed-top is-mobile has-shadow has-navbar-fixed-top"
      data-cy="nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <HeaderLink to="/" linkName="Home" />
          <HeaderLink to="/tabs" linkName="Tabs" />
        </div>
      </div>
    </nav>
  );
};
