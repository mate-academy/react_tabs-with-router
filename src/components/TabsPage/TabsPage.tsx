import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { Tab } from '../../types/Tab';
import './TabsPage.scss';

type Props = {
  tabs: Tab[];
};

export const TabsPage: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();
  const selectedTab = tabs.find((tab) => tab.id === tabId);

  const activeItem = 'tabs__tab-title tabs__tab-title--active';
  const inActiveItem = 'tabs__tab-title';

  return (
    <section className="tabs">
      <p className="tabs__title">
        {!selectedTab
          ? 'Please select a tab'
          : ''}
      </p>
      {tabs.map((tab) => (
        <NavLink
          to={`/tabs/${tab.id}`}
          key={tab.id}
          className={({ isActive }) => (
            isActive ? activeItem : inActiveItem
          )}
        >
          {tab.title}
        </NavLink>
      ))}
      <p className="tabs__tab-content">
        {selectedTab && selectedTab.content}
      </p>
    </section>
  );
};
