import { Link } from 'react-router-dom';

export const Navigation = () => {
  return (
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item is-active">
            Home
          </Link>
          <Link to="/tabs" className="navbar-item">
            Tabs
          </Link>
        </div>
      </div>
    </nav>
  );
};
