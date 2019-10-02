import React from 'react';

import { TabsPageProps } from '../PropTypes/PropTypes';
import Tabs from '../Tabs/Tabs';

const TabsPage = ({ tabs, tabId }) => (
  <div>
    <h2>Page of tabs</h2>
    <Tabs tabId={tabId} tabs={tabs} />
  </div>
);

TabsPage.propTypes = TabsPageProps;
export default TabsPage;
