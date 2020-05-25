import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { Tab } from '../helpers';
import { TabCard } from './TabCard';

import './TabsPage.scss';

type Props = {
  tabId?: string;
  tabs: Tab[];
};

export const TabsPage: React.FC<Props> = ({ tabId, tabs }) => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabSelection = (index: number) => {
    setTabIndex(index);
  };

  return (
    <>
      <h1>Tabs</h1>
      <div className="tabs__container">
        <div className="tabs__nav">
          {tabs.map((tab, index) => (
            <NavLink to={`/tabs/${tab.id}`} activeClassName="tabs__item active">
              <TabCard
                title={tab.title}
                key={tab.id}
                index={index}
                isActive={tab.id === tabId}
                selectTab={() => handleTabSelection(index)}
              />
            </NavLink>
          ))}
        </div>
        <div className="tabs__content">
          {tabs[tabIndex].content}
        </div>
      </div>
    </>
  );
};
