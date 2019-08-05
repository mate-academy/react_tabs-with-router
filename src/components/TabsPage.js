import React from 'react';
import Tabs from './Tabs';
import TabsData from '../TabsData';

function TabsPage(props) {
  return (
    <div className="tabs-page-content">
      <h3>Tabs Page</h3>
      <Tabs
        TabsData={TabsData}
        tabId={props.match.params.tabId}
      />
    </div>
  );
}

export default TabsPage;
