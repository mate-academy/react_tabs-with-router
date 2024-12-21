import React, { useContext } from 'react';
import { TabsContext } from '../components/context/TabsContext';
import { Tabs } from '../components/Tabs';

export const TabsPage: React.FC = () => {
  const { activeTab } = useContext(TabsContext);

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div>
        <div className="tabs is-boxed">
          <Tabs />
        </div>

        <div className="block" data-cy="TabContent">
          {activeTab ? activeTab.content : 'Please select a tab'}
        </div>
      </div>
    </>
  );
};
