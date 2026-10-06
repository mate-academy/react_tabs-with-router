import { NavLink, Outlet, useMatch } from 'react-router-dom';
import cn from 'classnames';

export const TabsPage = () => {
  const isTab1Active = useMatch('/tabs/tab-1');
  const isTab2Active = useMatch('/tabs/tab-2');
  const isTab3Active = useMatch('/tabs/tab-3');

  const isAnyTabActive = isTab1Active || isTab2Active || isTab3Active;

  return (
    <div className="section">
      <div className="container">
        <h1 className="title">Tabs page</h1>
        {/* <h1 className="title">Page not found</h1> */}

        <div className="tabs is-boxed">
          <ul>
            <li data-cy="Tab" className={cn({ 'is-active': isTab1Active })}>
              <NavLink to="tab-1">Tab 1</NavLink>
            </li>
            <li data-cy="Tab" className={cn({ 'is-active': isTab2Active })}>
              <NavLink to="tab-2">Tab 2</NavLink>
            </li>
            <li data-cy="Tab" className={cn({ 'is-active': isTab3Active })}>
              <NavLink to="tab-3">Tab 3</NavLink>
            </li>
          </ul>
        </div>

        <div className="block" data-cy="TabContent">
          <Outlet />
          {!isAnyTabActive && 'Please select a tab'}
        </div>
      </div>
    </div>
  );
};
