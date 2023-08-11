import { NavLink } from "react-router-dom"
import classNames from "classnames";

const isActiveTab = ({ isActive }: { isActive: boolean }) => classNames(
  'navbar-item', { 'is-active': isActive },
);

export const NavPage = () => {
return(
  <nav
    className="navbar is-light is-fixed-top is-mobile has-shadow"
    data-cy="Nav"
  >
  <div className="container">
    <div className="navbar-brand">
      <NavLink
        to="/"
        className={isActiveTab}
      >Home
      </NavLink>

      <NavLink
        to="/tabs"
        className={isActiveTab}
      >Tabs
      </NavLink>
      </div>
    </div>
  </nav>
  );
}
