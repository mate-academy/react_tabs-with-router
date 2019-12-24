import React from 'react';

const Tabs = ({ tabsData, currentTabId }) => (
  tabsData.map(({ id, content }) => (
    <p className="tab__text">
      {id === currentTabId ? content : ''}
    </p>
  ))
);

export default Tabs;
