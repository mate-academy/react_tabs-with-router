import React from 'react';
import { useParams } from 'react-router-dom';
import { Tab } from '../types/Tab';

interface Props {
  tabs: Tab[];
}

const TabContent: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();
  const tab = tabs.find(t => t.id === tabId);

  return (
    <div className="block" data-cy="TabContent">
      {tab?.content || 'Please select a tab'}
    </div>
  );
};

export default TabContent;
