import React from 'react';
import { useParams } from 'react-router-dom';
import { tabs } from '../utils/tabs';

export const TabElement: React.FC = () => {
  const { TabId } = useParams();

  const currentTab = tabs.find(currTab => currTab.id === TabId);

  return (
    <div className="block" data-cy="TabContent">
      {currentTab
        ? `${currentTab.content}`
        : 'Please select a tab'}
    </div>
  );
};
