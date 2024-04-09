import { NavLink } from "react-router-dom";
import cn from "classnames";

export const Navigation = () => {
  
  const getLinkActive = ({ isActive }: { isActive: boolean }) => {
    return cn('navbar-item', {
      'is-active': isActive,
    });
  };
  return (
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
        <div className="navbar-brand">
        <NavLink to="/" className={getLinkActive}>
            Home
          </NavLink>
          <NavLink to="/tabs" className={getLinkActive}>
            Tabs
          </NavLink>
        </div>
    </nav>
  );
};
