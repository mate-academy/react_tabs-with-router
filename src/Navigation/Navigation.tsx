import { NavLink } from 'react-router-dom';
import cn from 'classnames';

export const Navigation = () => {
  const getLinkClases = ({ isActive }: { isActive: boolean }) => {
    return cn('navbar-item', {
      'is-active': isActive,
    });
  };

  const getStyle = ({ isActive }: { isActive: boolean }) => ({
    color: isActive ? 'red' : '',
  });

  return (
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavLink
            className={getLinkClases}
            style={getStyle}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={getLinkClases}
            style={getStyle}
            to="tabs"
          >
            Tabs
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
