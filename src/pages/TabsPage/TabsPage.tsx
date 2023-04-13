import React from 'react';
import { useParams } from 'react-router-dom';
import { TabNav } from '../../components/TabNav';
import { getTabContentById } from '../../common/heplers';

export const TabsPage: React.FC = React.memo(() => {
  const { selectedTabId = '' } = useParams();
  const pageContent = getTabContentById(selectedTabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <TabNav selectedTabId={selectedTabId} />

      <div className="block" data-cy="TabContent">
        {pageContent || 'Please select a tab'}
      </div>
    </>
  );
});
