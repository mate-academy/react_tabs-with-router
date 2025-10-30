import { NavLink, Outlet } from 'react-router-dom';
import cn from 'classnames';
import './App.scss';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const getLinkClass = ({ isActive }: { isActive: boolean }) =>
  cn('navbar-item', {
    'is-active': isActive,
  });

export const App = () => {
  return (
    <>
      <nav
        className="navbar is-fixed-top is-light is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <NavLink to="/" end className={getLinkClass}>
              Home
            </NavLink>

            <NavLink to="/tabs" className={getLinkClass}>
              Tabs
            </NavLink>
          </div>
        </div>
      </nav>

      <Outlet context={{ tabs }} />
    </>
  );
};
