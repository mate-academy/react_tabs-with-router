import { useContext } from 'react';
import { TabContext } from '../context/Store';
import { NavLink, Outlet } from 'react-router-dom';
import cn from 'classnames';

export const Tabs = () => {
  const tabs = useContext(TabContext);

  return (
    <div className="container">
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <NavLink
              data-cy="Tab"
              key={tab.id}
              to={`${tab.id}`}
              className={({ isActive }) =>
                cn('navbar-item', { 'is-active': isActive })
              }
            >
              {tab.title}
            </NavLink>
          ))}
        </ul>
      </div>
      <Outlet />
      {/* <Routes>
        {tabs.map(tab => (
          <Route path={tab.id} element={<TabContent />} key={tab.id} />
        ))}
      </Routes> */}
    </div>
  );
};
