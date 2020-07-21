import React, { FC } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Tab } from '../Tab/Tab';
import './Tabs.css';

interface MatchParams {
  tabId: string;
}

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const Tabs: FC<RouteComponentProps<MatchParams>> = ({ match }) => {
  return (
    <div className="tabs">
      <div className="tabs__menu">
        {tabs.map(tab => (
          <Tab
            title={tab.title}
            tabId={tab.id}
            key={tab.id}
          />
        ))}
      </div>
      <div className="tabs__content">
        {(tabs.find(tab => tab.id === match.params.tabId) || {}).content}
      </div>
    </div>
  );
};
