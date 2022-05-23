import React from 'react';
import { useParams, NavLink } from 'react-router-dom';

import './TabsPage.scss';

type Props = {
  tabs: Tab[];
};

export const TabsPage:React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams<{ tabId: string }>();

  return (
    <div className="tabs">
      <div className="tab-links">
        {tabs.map(tab => (
          <NavLink
            to={`/tabs/${tab.id}`}
            key={tab.id}
            className={({ isActive }) => (isActive
              ? 'tab-link tab-link--active'
              : 'tab-link'
            )}
          >
            {tab.title}
          </NavLink>
        ))}
      </div>
      <div className="tab-content">
        {tabs.find(tab => tab.id === tabId)
          ? (tabs.find(tab => tab.id === tabId))?.content
          : 'Please select a tab'}
      </div>
    </div>
  );
};
