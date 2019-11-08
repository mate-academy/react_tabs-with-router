import React from 'react';

import Tabs from '../Tabs/Tabs';

const TabsPage = ({ tabs, tabId }) => (
  <>
    <h1>Tabs page</h1>
    <Tabs
      tabs={tabs}
      tabId={tabId}
    />
  </>
);

export default TabsPage;
