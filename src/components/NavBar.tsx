import { NavLink } from 'react-router-dom';
import cn from 'classnames';

export const NavBar = () => {
  const isNavLinkActive = ({ isActive }: { isActive: boolean }) => {
    return (cn('navbar-item', {
      'is-active': isActive,
    }));
  };

  return (
    <nav
      className={`
    navbar
    is-light
    is-fixed-top
    is-mobile
    has-shadow
    has-navbar-fixed-top
`}
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">

          <NavLink
            to="/"
            className={isNavLinkActive}
          >
            Home
          </NavLink>

          <NavLink
            to="/tabs"
            className={isNavLinkActive}
          >
            Tabs
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
