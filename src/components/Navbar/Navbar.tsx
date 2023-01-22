import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

interface Props {
  to:string,
  text: string,
}

const PageNavLink: React.FC<Props> = ({ to, text }) => (
  <NavLink
    to={to}
    className={({ isActive }) => classNames(
      'navbar-item', { 'is-active': isActive },
    )}
  >
    {text}
  </NavLink>
);

export const Navbar = () => (
  <nav
    className="navbar is-light is-fixed-top is-mobile has-shadow"
    data-cy="Nav"
  >
    <div className="container">
      <div className="navbar-brand">
        <PageNavLink to="/" text="Home" />
        <PageNavLink to="tabs" text="Tabs" />
      </div>
    </div>
  </nav>
);
