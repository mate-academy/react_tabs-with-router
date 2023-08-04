import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

const getActiveLink = ({ isActive }: { isActive: boolean }) => classNames(
  'navbar-item', { 'is-active': isActive },
);

export const Navigation = () => {
  return (
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavLink to="/" className={getActiveLink}>Home</NavLink>
          <NavLink to="/tabs" className={getActiveLink}>Tabs</NavLink>
        </div>
      </div>
    </nav>
  );
};
