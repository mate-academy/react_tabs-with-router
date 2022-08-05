import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <nav className="navbar is-fixed-top has-background-light" data-cy="nav">
      <div className="navbar-menu">
        <div className="navbar-start">
          <Link to="/" className="navbar-item isActive is-active">Home</Link>
          <Link to="/tabs" className="navbar-item isActive">Tabs</Link>
        </div>
      </div>
    </nav>
  );
};
