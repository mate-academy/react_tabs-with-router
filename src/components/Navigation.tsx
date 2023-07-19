import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

const linkClassName = (
  { isActive } : { isActive : boolean },
) => classNames('navbar-item', { 'is-active': isActive });

export const Navigation: React.FC = () => (
  <nav
    className="navbar is-light is-fixed-top is-mobile has-shadow"
    data-cy="Nav"
  >
    <div className="container">
      <div className="navbar-brand">
        <NavLink to="/" className={linkClassName}>Home</NavLink>
        <NavLink to="/tabs" className={linkClassName}>Tabs</NavLink>
      </div>
    </div>
  </nav>
);
