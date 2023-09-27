import React from 'react';
import { useParams } from 'react-router-dom';
import { Tab } from '../types/Tab';

type Props = {
  tabs: Tab[]
};

export const TabContent: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();

  return (
    <div className="block" data-cy="TabContent">
      {tabs.find(({ id }) => id === tabId)?.content}
    </div>
  );
};
