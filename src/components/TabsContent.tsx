import React from 'react';
import { Tab } from '../types/Tab';
import { useParams } from 'react-router-dom';

type Props = {
  tabs: Tab[];
};

export const TabsContent: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();

  const tab = tabs.find(t => t.id === tabId);

  return tab ? <p>{tab.content}</p> : <p>Please select a tab</p>;
};
