import { useParams } from 'react-router-dom';
import { tabs } from '../../data/tabs';
import { NavigationTab } from '../NavigationTab';

export const TabsPage = () => {
  const { tabId = '' } = useParams();
  const selectedId = tabs.find(tab => tab.id === tabId) || null;

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <NavigationTab selectedId={tabId} />
      {selectedId ? (
        <div className="block" data-cy="TabContent">
          {selectedId.content}
        </div>
      ) : (
        <div className="block" data-cy="TabContent">
          Please select a tab
        </div>
      )}
    </>
  );
};
