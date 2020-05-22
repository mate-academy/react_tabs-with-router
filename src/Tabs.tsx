import React, { useMemo } from 'react';
import { NavLink } from 'react-router-dom';

type Props = {
  currentTabId: string;
  tabs: Tab[];
};

export const Tabs: React.FC<Props> = ({ currentTabId, tabs }) => {
  const activeTab = useMemo(() => (
    tabs.find(tab => tab.id === currentTabId)
  ), [currentTabId, tabs]);

  return (
    <>
      <ul className="nav">
        {tabs.map(tab => (
          <li key={tab.id}>
            <NavLink
              to={`/tabs/${tab.id}`}
              className="nav-link"
            >
              {tab.id}
            </NavLink>
          </li>
        ))}
      </ul>
      {activeTab && (
        <p>{activeTab.content}</p>
      )}
    </>
  );
};
