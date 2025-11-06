import React from 'react';
import { Tabs } from '../components/Tabs';
import { useParams } from 'react-router-dom';

export const TabsPage = () => {
  const { tabId } = useParams();

  return (
    <main>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <Tabs activeTabId={tabId} />
      </div>
    </main>
  );
};
