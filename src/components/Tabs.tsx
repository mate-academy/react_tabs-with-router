import { useContext } from 'react';
import { TabContext } from '../context/Store';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import cn from 'classnames';

export const Tabs = () => {
  const tabs = useContext(TabContext);
  const { id } = useParams();

  return (
    <div className="container">
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="Tab"
              key={tab.id}
              className={tab.id === id ? 'is-active' : ''}
            >
              <NavLink
                to={`${tab.id}`}
                className={({ isActive }) =>
                  cn('navbar-item', { 'is-active': isActive })
                }
              >
                {tab.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      {tabs.find(tab => tab.id === id) === undefined ? (
        <div className="block" data-cy="TabContent">
          Please select a tab
        </div>
      ) : (
        <Outlet />
      )}
    </div>
  );
};
