import React, { useContext } from 'react';
import { TabsList } from '../TabsList/TabsList';
import { useParams } from 'react-router-dom';
import { TabsContext } from '../../store/TabsContext';

export const TabsPage = () => {
  const tabs = useContext(TabsContext);
  const { tabId } = useParams();
  const selectedTab = tabs.find(tab => tabId === tab.id);

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <TabsList />

      {selectedTab ? (
        <div className="block" data-cy="TabContent">
          {selectedTab?.content}
        </div>
      ) : (
        <div className="block" data-cy="TabContent">
          Please select a tab
        </div>
      )}
    </>
  );
};
