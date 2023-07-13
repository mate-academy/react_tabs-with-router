import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

interface Active {
  isActive: boolean
}

const setActiveClassNavLink = ({ isActive }: Active) => {
  return classNames('navbar-item',
    {
      'is-active': isActive,
    });
};

export const Navigation: React.FC = () => {
  return (
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavLink
            to="/"
            className={setActiveClassNavLink}
          >
            Home
          </NavLink>
          <NavLink
            to="/tabs"
            className={setActiveClassNavLink}
          >
            Tabs
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
