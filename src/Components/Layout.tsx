import { NavLink, Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <h1>Tabs with router</h1>
      <nav className="nav__container">
        <NavLink
          to="/"
          className="nav__link"
        >
          HOME
        </NavLink>
        <NavLink
          to="/tabs"
          className="nav__link"
        >
          TABS
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
};
