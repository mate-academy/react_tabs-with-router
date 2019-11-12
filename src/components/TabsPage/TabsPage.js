import React from 'react';
import Tabs from '../Tabs/Tabs';

const tabs = [
  { id: 'tab-1', title: 'Таб 1', content: 'Текст табу 1' },
  { id: 'tab-2', title: 'Таб 2', content: 'Текст табу 2' },
  { id: 'tab-3', title: 'Таб 3', content: 'Текст табу 3' },
];

const TabsPage = ({ match }) => (
  <Tabs tabs={tabs} match={match} />
);

export default TabsPage;
