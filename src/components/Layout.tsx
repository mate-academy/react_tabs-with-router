import { NavLink, Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div>
      <nav className="main-nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/tabs">Tabs</NavLink>
      </nav>

      <main>
        <Outlet />
      </main>
    </div>
  );
}
