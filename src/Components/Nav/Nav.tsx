import './Nav.scss';
import { NavLink } from 'react-router-dom';

export const Nav = () => {
  return (
    <nav className="nav">
      <NavLink
        to="/"
        className="nav__link"
      >
        Home
      </NavLink>

      <NavLink
        to="/tabs"
        className="nav__link"
      >
        Tabs
      </NavLink>
    </nav>
  );
};
