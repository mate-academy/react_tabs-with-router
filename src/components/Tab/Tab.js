import React from 'react';
import './Tab.css';

const Tab = ({ match, tabs }) => {
  const tabContent = tabs.find(tab => tab.id === match.params.tabId);

  return (
    <div className="tabs__content">
      {tabContent && tabContent.content}
    </div>
  );
};

export default Tab;
