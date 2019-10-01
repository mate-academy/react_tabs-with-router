import React from 'react';

import { TabsPageProps } from '../PropTypes/PropTypes';
import Tabs from '../Tabs/Tabs';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];
const TabsPage = ({ match }) => (
  <div>
    <h2>Page of tabs</h2>
    <Tabs match={match} tabs={tabs} />
  </div>
);

TabsPage.propTypes = TabsPageProps;
export default TabsPage;
