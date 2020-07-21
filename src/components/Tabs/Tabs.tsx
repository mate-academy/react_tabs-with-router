import React, { FC } from 'react';
// import { NavLink } from 'react-router-dom';
import { TabsInterface } from '../../interfaces';
import { Tab } from '../Tab/Tab';
import './Tabs.css';

interface TabsProps {
  tabs: TabsInterface[];
  tabId: string;
}

export const Tabs: FC<TabsProps> = ({ tabs, tabId }) => {
  const currentTab = tabs.find(tab => tab.id === tabId);

  return (
    <div className="center">
      <h1 className="hading">Tabs</h1>
      <nav>
        <ul className="nav nav-tabs">
          {tabs.map((tab) => (
            <li key={tab.title}>
              <Tab tabId={tab.id} title={tab.title} />
            </li>
          ))}
        </ul>
      </nav>
      <div className="content">
        {currentTab && currentTab.content}
      </div>

    </div>
  );
};
