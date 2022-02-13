import { FC } from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import { getTabs } from '../../api';

import './TabsPage.scss';

export const TabsPage: FC = () => {
  const { tabId } = useParams<{ tabId: string }>();

  const tabs = getTabs();

  return (
    <>
      <h2 className="title is-2">
        Tabs page
      </h2>
      <ul className="tabs-menu">
        {tabs.map(tab => (
          <li key={tab.id}>
            <NavLink
              className={({ isActive }) => `${isActive ? 'button-selected is-active' : ''} button`}
              style={{ boxShadow: 'none' }}
              to={tab.id}
            >
              {tab.title}
            </NavLink>
          </li>
        ))}
      </ul>
      {tabId
        ? <Outlet />
        : (
          <div className="box">
            <h3 className="content">Please select a tab</h3>
          </div>
        )}
    </>
  );
};
