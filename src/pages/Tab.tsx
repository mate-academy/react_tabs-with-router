import React from 'react';
import { useParams } from 'react-router-dom';
import { tabs } from '../components/data';

export const Tab: React.FC = () => {
  const { tabId } = useParams();
  const selectedTab = tabs.find(tab => tab.id === tabId);

  return (
    <p>
      {selectedTab
        ? (selectedTab?.content)
        : ('Please select a tab')}
    </p>
  );
};
