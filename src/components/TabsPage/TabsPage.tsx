import React from 'react';
import { NavLink, useParams } from 'react-router-dom';

import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[]
};

const TabsPage: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams<{ tabId: string }>();

  const selectedTab = tabs.find(tab => tab.id === tabId);

  return (
    <>
      <ul>
        {tabs.map(tab => (
          <li key={tab.id}>
            <NavLink
              to={tab.id}
              style={({ isActive }) => ({ color: isActive ? 'red' : '' })}
            >
              {tab.title}
            </NavLink>
          </li>
        ))}
      </ul>
      {selectedTab ? `${selectedTab.content}` : 'Please select a tab'}
    </>
  );
};

export default TabsPage;
