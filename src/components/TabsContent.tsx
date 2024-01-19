import React from 'react';
import { useParams } from 'react-router-dom';
import { tabs } from './Tabs';

export const TabContent: React.FC = () => {
  const { tabId } = useParams();
  const selectedTab = tabs.find(tab => tab.id === tabId);
  const content = selectedTab ? selectedTab.content : 'Please select a tab';

  return (
    <div className="block" data-cy="TabContent">
      {content}
    </div>
  );
};
