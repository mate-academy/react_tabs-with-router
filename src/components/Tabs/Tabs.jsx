import React from 'react';

const Tabs = ({ tabs, match }) => (
  <>
    <h2 style={{ marginLeft: '40px' }}>
      {tabs.find(tab => tab.id === match.params.tabsId)
        && tabs.find(tab => tab.id === match.params.tabsId).content}
    </h2>
  </>
);

export default Tabs;
