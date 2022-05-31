import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { Tabs } from '../../types/Tabs';

import './TabsPage.scss';

interface Props {
  tabs: Tabs[],
}

export const TabsPage: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams<{ tabId: string }>();

  const selectedTab = tabs.find(tab => tab.id === tabId);

  const isValidTab = () => {
    if (!selectedTab) {
      return 'Please select your tab';
    }

    return 'Tabs page';
  };

  return (
    <div className="tabsPage">
      <h1 className="tabsPage__title">
        {isValidTab()}
      </h1>

      <div className="tabsPage__block">
        <div className="tabsPage__list">
          {tabs.map(tab => (
            <div
              className="tabsPage__item"
              key={tab.id}
            >
              <NavLink
                className="tabsPage__selection"
                to={`/tabs/${tab.id}`}
              >
                {tab.title}
              </NavLink>
            </div>
          ))}
        </div>
      </div>

      {selectedTab && (
        <div className="tabsPage__content">
          {selectedTab.content}
        </div>
      )}
    </div>
  );
};
