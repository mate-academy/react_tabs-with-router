import { NavLink } from 'react-router-dom';

interface NavLinkState {
  isActive:boolean,
}

export const addIsActiveClass = (navLinkState: NavLinkState) => {
  const { isActive } = navLinkState;

  return isActive ? 'is-active has-text-link' : 'has-text-primary';
};

export const Navigation = () => {
  return (
    <nav className="panel">
      <p className="panel-tabs" data-cy="navigation">
        <NavLink to="/" className={addIsActiveClass}>
          Home
        </NavLink>
        <NavLink to="/tabs" className={addIsActiveClass}>
          Tabs
        </NavLink>
      </p>
    </nav>
  );
};
