import React from 'react';
import { Tab } from './types/Tab';
import { useParams } from 'react-router-dom';

type Props = {
  tabs: Tab[];
};

export const Tabb: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();

  function getCurrectProduct(id: string) {
    return tabs.find(tab => tab.id === id);
  }

  function getCurrentPhone() {
    if (!tabId) {
      return;
    }

    return getCurrectProduct(tabId);
  }

  const currentTab = getCurrentPhone();

  return <p data-cy="TabContent">{currentTab?.content}</p>;
};
