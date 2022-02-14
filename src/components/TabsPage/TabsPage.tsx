import React from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import { Tab } from '../../Types/Tab';

type Props = {
  tabs: Tab[];
};

export const TabsPage: React.FC<Props> = ({ tabs }) => (
  <main>
    <h1>Tabs</h1>

    {tabs.map(tab => (
      <NavLink
        to={`${tab.id}`}
        key={tab.id}
        className={({ isActive }) => (isActive ? 'Link Link--active' : 'Link')}
      >
        {tab.title}
      </NavLink>
    ))}

    {useParams().tabId
      ? <Outlet />
      : (<p>Please select a tab</p>)}
  </main>
);
