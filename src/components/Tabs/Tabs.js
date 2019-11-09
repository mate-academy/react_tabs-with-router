import React from 'react';

const Tabs = ({tabs, tabId, match}) => (
  <p>
    {tabs.find(tab => tab.id === match.params.tabId)
    && tabs.find(tab  => tab.id === match.params.tabId).content}
  </p>
);

export default Tabs;
