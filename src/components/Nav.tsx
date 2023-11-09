import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

const handleActiveLink = ({ isActive }: { isActive: boolean }) => {
  return classNames('navbar-item', {
    'is-active': isActive,
  });
};

export const Nav = () => (
  <nav
    className="navbar is-light is-fixed-top is-mobile has-shadow"
    data-cy="Nav"
  >
    <div className="container">
      <div className="navbar-brand">
        <NavLink to="/" className={handleActiveLink}>Home</NavLink>
        <NavLink to="/tabs" className={handleActiveLink}>Tabs</NavLink>
      </div>
    </div>
  </nav>
);
