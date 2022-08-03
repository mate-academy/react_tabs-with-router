import { NavLink } from 'react-router-dom';

export const Navigation = () => (
  <nav className="is-flex mb-4">
    <NavLink
      to="/"
      className={({ isActive }) => (
        (isActive && 'button is-info') || 'button is-white')}
    >
      Home
    </NavLink>
    <NavLink
      to="/tabs"
      className={({ isActive }) => (
        (isActive && 'button is-info') || 'button is-white')}
    >
      Tabs
    </NavLink>
  </nav>
);
