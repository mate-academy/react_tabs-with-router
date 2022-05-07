import React from 'react';
import './TabsPage.scss';
import { useParams, NavLink } from 'react-router-dom';

interface Tab {
  id: string,
  title: string,
  content: string,
}

type Props = {
  tabs: Tab[],
};

export const TabsPage: React.FC<Props> = React.memo(({ tabs }) => {
  const { tabId } = useParams<{ tabId: string }>();
  const selectedTab = tabs.find(tab => tab.id === tabId);

  return (
    <div>
      <h2>Tabs Page</h2>
      <div className="container">
        {tabs.map(tab => (
          <NavLink
            className={({ isActive }) => (isActive
              ? 'container__title-link container__title-link--active'
              : 'container__title-link')}
            key={tab.id}
            to={`/tabs/${tab.id}`}
          >
            {tab.title}
          </NavLink>
        ))}
      </div>
      <div className="link-info">
        {selectedTab
          ? selectedTab.content
          : 'Select Tab'}
      </div>
    </div>
  );
});
