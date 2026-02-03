import { NavLink } from 'react-router-dom';

export const NavBar = () => {
  const getActiveLink = ({ isActive }: { isActive: boolean }): string => {
    return `navbar-item ${isActive ? 'is-active' : ''}`;
  };

  return (
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavLink to="/" className={getActiveLink}>
            Home
          </NavLink>
          <NavLink to="/tabs" className={getActiveLink}>
            Tabs
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
