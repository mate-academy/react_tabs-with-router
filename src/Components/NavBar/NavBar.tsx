import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

type PropTypes = {
  to: string;
  text: string;
};

export const PageNavLink: React.FC<PropTypes> = ({ to, text }) => (
  <NavLink
    className={({ isActive }) => classNames(
      'navbar-item',
      { 'is-active': isActive },
    )}
    to={to}
  >
    {text}
  </NavLink>
);

export const NavBar = () => {
  return (
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <PageNavLink to="/" text="Home" />
          <PageNavLink to="/tabs" text="Tabs" />
        </div>
      </div>
    </nav>
  );
};
