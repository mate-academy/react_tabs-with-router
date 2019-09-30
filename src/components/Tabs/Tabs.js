import React from 'react';
import './Tabs.css';

const Tabs = ({ match, tabs }) => (
  <div className="tabs__content">
    {tabs.find(tab => tab.id === match.params.tabId)
      && tabs.find(tab => tab.id === match.params.tabId).content}
  </div>
);

export default Tabs;
