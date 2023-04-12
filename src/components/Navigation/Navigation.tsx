import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

interface NavLinkClassName {
  isActive: boolean;
}

export const Navigation: React.FC = () => {
  const getClasses = ({ isActive }: NavLinkClassName) => classNames(
    'navbar-item',
    { 'is-active': isActive },
  );

  return (
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavLink to="/" className={getClasses}>
            Home
          </NavLink>

          <NavLink to="/tabs" className={getClasses}>
            Tabs
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
