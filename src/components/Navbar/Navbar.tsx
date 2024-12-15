import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    // {/* Also requires <html class="has-navbar-fixed-top"> */}
    <nav className="navbar is-fixed-top has-background-light" data-cy="nav">
      <div className="navbar-menu">
        <div className="navbar-start">
          <Link to="/" className="navbar-item isActive">Home</Link>
          <Link to="/tabs" className="navbar-item isActive">Tabs</Link>
        </div>
      </div>
    </nav>
  );
};
