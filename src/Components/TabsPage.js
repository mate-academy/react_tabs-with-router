import React, { Fragment } from 'react';
import TabsWithRouter from './Tabs';

const tabs = [
  {
    id: 'tab-1', title: 'Home', content: 'Some text 1',
  },
  {
    id: 'tab-2', title: 'Profile', content: 'Some text 2',
  },
  {
    id: 'tab-3', title: 'Contact', content: 'Some text 3',
  },
];

const TabsPage = () => (
  <Fragment>
    <h1>Tabs</h1>

    <TabsWithRouter tabs={tabs} />
  </Fragment>
);

export default TabsPage;
