import React from 'react';
import { useParams } from 'react-router-dom';
import { Tab } from '../types/Tab';

type Props = {
  tabs: Tab[],
};

export const TabContent: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();
  const findTab = tabs.find(tab => tabId === tab.id) || null;

  return (
    <div className="block" data-cy="TabContent">
      { findTab
        ? findTab.content
        : 'Please select a tab'}
    </div>
  );
};
