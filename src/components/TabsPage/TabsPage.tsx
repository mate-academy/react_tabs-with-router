import React from 'react';
import { useParams } from 'react-router-dom';
import { Tabs } from '../Tabs';

export const TabsPage: React.FC = () => {
  const { tabId } = useParams<{ tabId: string }>();

  return (
    <>
      <div className="container">
        <h1 className="title has-text-centered mt-5">Tabs Page</h1>
        <Tabs tabId={tabId} />
      </div>
    </>

  );
};
