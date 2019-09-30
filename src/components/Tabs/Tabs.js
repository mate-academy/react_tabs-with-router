import React from 'react';

const Tabs = ({ tabs, match }) => (
  <p>
    {tabs.find(item => item.id === match.params.tabId)
      && tabs.find(item => item.id === match.params.tabId).content}
  </p>
);

export default Tabs;
