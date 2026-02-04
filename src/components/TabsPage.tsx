import { useParams } from 'react-router-dom';
import { TabsComponent } from './TabsComponents';
import React from 'react';

export const TabsPage: React.FC = () => {
  const params = useParams<{ tabId: string }>();
  const tabId = params.tabId;

  return (
    <div className="section">
      <div className="container">
        <h1 className="title">Tabs page</h1>
        <TabsComponent selectedId={tabId} />
      </div>
    </div>
  );
};
