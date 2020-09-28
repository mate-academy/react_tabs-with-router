import React from 'react';
import {
  NavLink,
} from 'react-router-dom';

export const TabsPage = ({ tabs, tabId }) => {
  const tab = tabs.find((tab) => tab.id === tabId);

  return (
    <div>
      <h2>Tabs page</h2>
      <nav>
        {tabs.map((tab) => (
          <button type="button" key={tab.id}>
            <NavLink to={`/tabs/${tab.id}`}>
              {tab.title}
            </NavLink>
          </button>
        ))}
      </nav>
      <div>{tab && tab.content}</div>
    </div>
  );
};
