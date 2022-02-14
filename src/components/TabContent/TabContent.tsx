import React from 'react';
import { useParams } from 'react-router-dom';
// Types
import { Tab } from '../../Types/Tab';

type Props = {
  tabs: Tab[];
};

export const TabContent: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();
  const correntTab = tabs.find(tab => tab.id === tabId);

  return (
    <p>{correntTab?.content}</p>
  );
};
