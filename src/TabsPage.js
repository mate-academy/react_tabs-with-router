import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Tab from './Tab';

const tabs = [
  {
    id: 'tab-1', title: 'Tab 1', content: 'Some text 1',
  },
  {
    id: 'tab-2', title: 'Tab 2', content: 'Some text 2',
  },
  {
    id: 'tab-3', title: 'Tab 3', content: 'Some text 3',
  },
];

const TabsPage = () => {
  const { tabId } = useParams();
  const [activeTab, setActiveTab] = useState({});

  return (
    <>
      <div className="navbar-menu">
        {tabs.map(tab => (
          <Tab tab={tab} setActiveTab={setActiveTab} tabId={tabId} />
        ))}
      </div>
      {activeTab.id && tabId === activeTab.id ? (
        <h1 className="title is-6 content">{activeTab.content}</h1>
      ) : (
        <h1 className="title is-6 content">Please select a tab</h1>
      )}
    </>
  );
};

export default TabsPage;
