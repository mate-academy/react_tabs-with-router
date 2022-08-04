import { Outlet, Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    <>
      <nav className="navbar is-fixed-top has-background-light" data-cy="nav">
        <div className="navbar-menu">
          <div className="navbar-start">
            <Link className="navbar-item isActive" to="/">
              Home
            </Link>
            <Link className="navbar-item isActive" to="/tabs">
              Tabs
            </Link>
          </div>
        </div>
      </nav>
      <div className="section">
        <Outlet />
      </div>
    </>
  );
};
