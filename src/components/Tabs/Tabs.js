import React from 'react';

const Tabs = ({tabs, tabId}) => (
  <p>
    {tabs.find(tab => tab.id === tabId)}
  </p>
);

export default Tabs;
