import React from 'react';
import { Tabs } from '../components/Tabs';
import { useParams } from 'react-router-dom';

import { tabs as tabsFromServer } from '../api/tabsFromServer';

export const TabsPage: React.FC = () => {
  const { tabId } = useParams();

  return (
    <div className="container">
      <h1 className="title">Tabs page</h1>

      <Tabs />

      <div className="block" data-cy="TabContent">
        {tabsFromServer.find(({ id }) => id === tabId)?.content ||
          'Please select a tab'}
      </div>
    </div>
  );
};
