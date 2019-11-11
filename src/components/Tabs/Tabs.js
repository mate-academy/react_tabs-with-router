import React from 'react';

function Tabs({tabs, tabId, match}) {
  let findTabs = tabs.find(tab => tab.id === match.params.tabId);
  return (
    <p>
      {findTabs && findTabs.content}
    </p>
  );
}

export default Tabs;
