import { NavLink, Outlet } from 'react-router-dom'; // <-- NavLink вместо Link

const getLinkClass = ({ isActive }: { isActive: boolean }) =>
  `navbar-item ${isActive ? 'is-active' : ''}`;

export const RootLayout = () => (
  <>
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

    <div className="section">
      <div className="container">
        <Outlet />
      </div>
    </div>
  </>
);
