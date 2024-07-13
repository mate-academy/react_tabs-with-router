import React from 'react';
import { Tab as TabType } from '../types/Tab';
import { useParams } from 'react-router-dom';

type Props = {
  tabs: TabType[];
};

export const Tab: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();
  const currentTab = tabs.find(tab => tab.id === tabId);

  return (
    <div className="block" data-cy="TabContent">
      {currentTab ? currentTab.content : 'Please select a tab'}
    </div>
  );
};
