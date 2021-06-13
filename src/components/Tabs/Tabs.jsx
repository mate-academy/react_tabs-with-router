import React from 'react';
import { Route } from 'react-router-dom';

import { TabsList } from './TabsList';
import { TabContent } from './TabContent';

import './Tabs.scss';

const tabs = [
  {
    id: 'tab-1',
    title: 'Tab 1',
    content: 'Some text 1',
  },
  {
    id: 'tab-2',
    title: 'Tab 2',
    content: 'Some text 2',
  },
  {
    id: 'tab-3',
    title: 'Tab 3',
    content: 'Some text 3',
  },
];

export const Tabs = () => (
  <div className="tabs">
    <h1 className="tabs__title">Tabs</h1>

    <TabsList tabs={tabs} />

    <Route path="/tabs/:tabId?">
      <TabContent tabs={tabs} />
    </Route>
  </div>
);
