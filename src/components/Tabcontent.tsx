import React from 'react';
import { Tab as TabType } from '../types/Tab';
import { Navigate, useParams } from 'react-router-dom';
import { tabs } from '../tabs';

export const TabContent: React.FC = () => {
  const { tabId } = useParams();

  const tab = tabs.find((t: TabType) => t.id === tabId);

  if (!tab) {
    return <Navigate to=".." />;
  }

  return (
    <div className="block" data-cy="TabContent">
      {tab.content}
    </div>
  );
};
