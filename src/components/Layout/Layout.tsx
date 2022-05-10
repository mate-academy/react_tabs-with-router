import { NavLink, Outlet } from 'react-router-dom';

export const Layout: React.FC = () => (
  <>
    <header>
      <nav className="navbar is-fixed-top is-light">
        <div className="navbar-brand">
          <NavLink className="navbar-item is-tab" to="/">Home</NavLink>
          <NavLink className="navbar-item is-tab" to="/tabs">Tabs</NavLink>
        </div>
      </nav>
    </header>

    <Outlet />
  </>
);
