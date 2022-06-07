import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  return (
    <nav className="navbar bg-dark navbar-nav rounded m-2 p-2">
      <NavLink
        to="/"
        className={({ isActive }) => (
          `nav-link ${isActive && 'active border-bottom border-primary'}`
        )}
      >
        Home
      </NavLink>
      <NavLink
        to="/tabs"
        className={({ isActive }) => (
          `nav-link ${isActive && 'active border-bottom border-primary'}`
        )}
      >
        Tabs
      </NavLink>
    </nav>
  );
};
