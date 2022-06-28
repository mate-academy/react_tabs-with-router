import React from 'react';

const TabsContent = ({ tabId, tabs }) => (
  <div
    className="tabs_content"
  >
    {tabs.find(tab => tab.id === tabId).content}
  </div>
);

export default TabsContent;
