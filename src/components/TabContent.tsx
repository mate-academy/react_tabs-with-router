import React from 'react';
import { Tab } from '../types/Tab';

type Props = {
  tabs: Tab[]
  selectedTabId: string | undefined
};

export const TabContent: React.FC<Props> = ({ tabs, selectedTabId }) => {
  const content = tabs
    .find(tab => tab.id === selectedTabId)?.content;

  return (
    <div>{content}</div>
  );
};
