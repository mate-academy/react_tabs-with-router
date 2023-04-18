import React from 'react';
import { useParams } from 'react-router-dom';
import { Tabs } from '../Tabs/Tabs';

export const TabsPage: React.FC = () => {
  const { selectedTabId } = useParams();

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <Tabs selectedTabId={selectedTabId} />
    </>
  );
};
