import React from 'react';
import Tabs from '../Tabs/Tabs';
import { TabsPageProps } from '../PropTypes/PropTypes';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const TabsPage = ({ match }) => (
  <>
    <Tabs match={match} tabs={tabs} />
  </>
);

TabsPage.propTypes = TabsPageProps;

export default TabsPage;
