import React from 'react';
import Tab from '../Tab/Tab';

const TabsPage = ({ tabs, match }) => (
  <div className="tabs">
    <h2>TabsPage</h2>
    {tabs.map(tab => <Tab title={tab.title} id={tab.id} />)}
    {tabs.map(tab => (tab.id === match.params.id
      ? <p>{tab.content}</p>
      : undefined
    ))}
  </div>
);

export default TabsPage;
