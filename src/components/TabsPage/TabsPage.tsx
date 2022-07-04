import React from 'react';
import { useParams, NavLink } from 'react-router-dom';
import { Tab } from '../types/Tab';
import './TabsPage.scss';

type Props = {
  tabs: Tab[],
};

export const TabsPage: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();
  const selectedTab = tabs.find(tab => tab.id === tabId);

  return (
    <div className="TabsPage">
      <nav className="TabsPage__nav-list">
        {tabs.map(tab => (
          <NavLink
            to={`/tabs/${tab.id}`}
            key={tab.id}
            className={({ isActive }) => (isActive
              ? 'TabsPage__nav-item TabsPage__nav-item--active'
              : 'TabsPage__nav-item')}
          >
            {tab.title}
          </NavLink>
        ))}
      </nav>

      <h2 className="TabsPage__content">
        {!selectedTab ? (
          'Please select a tab'
        ) : (
          selectedTab.content
        )}
      </h2>
    </div>
  );
};
