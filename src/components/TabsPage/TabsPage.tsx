import React, { useContext } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { TabContext } from '../TabContext/TabContext';
import { Tabs } from '../Tabs/Tabs';

export const TabsPage: React.FC = () => {
  const tabs = useContext(TabContext);
  const { pathname } = useLocation();
  const { tabId } = useParams();
  const activeTab = tabId ? tabs.find(tab => tab.id === tabId) : undefined;

  return (
    <div className="section">
      <div className="container">
        <h1 className="title">Tabs page</h1>
        {pathname.startsWith('/tabs') && <Tabs />}

        <div className="block" data-cy="TabContent">
          {activeTab ? activeTab.content : 'Please select a tab'}
        </div>
      </div>
    </div>
  );
};
