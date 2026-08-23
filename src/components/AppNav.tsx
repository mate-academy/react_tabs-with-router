import cn from 'classnames';
import { NavLink } from 'react-router-dom';
import type { NavLinkRenderProps } from 'react-router-dom';

const getLinkClass = ({ isActive }: NavLinkRenderProps) =>
  cn('navbar-item', isActive && 'is-active');

export const AppNav = () => (
  <nav
    className="navbar is-light is-fixed-top is-mobile has-shadow"
    data-cy="Nav"
  >
    <div className="container">
      <div className="navbar-brand">
        <NavLink to="/" className={getLinkClass}>
          Home
        </NavLink>
        <NavLink to="/tabs" className={getLinkClass}>
          Tabs
        </NavLink>
      </div>
    </div>
  </nav>
);
