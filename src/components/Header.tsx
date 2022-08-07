import { NavLink } from 'react-router-dom';

export const Header = () => (
  <nav className="navbar is-fixed-top has-background-light" data-cy="nav">
    <div className="navbar-menu">
      <div className="navbar-start">
        <NavLink to="/" className="navbar-item isActive">Home</NavLink>
        <NavLink to="tabs" className="navbar-item isActive">Tabs</NavLink>
      </div>
    </div>
  </nav>
);
