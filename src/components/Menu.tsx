import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

const getNavLinksClass = ({ isActive }: { isActive: boolean }) =>
  classNames('navbar-item', { 'is-active': isActive });

function Menu() {
  return (
    <>
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <NavLink to="/" className={getNavLinksClass}>
              Home
            </NavLink>
            <NavLink to="/tabs" className={getNavLinksClass}>
              Tabs
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Menu;
