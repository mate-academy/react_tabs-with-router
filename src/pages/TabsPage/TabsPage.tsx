import { useParams } from 'react-router-dom';
import React from 'react';
import { PageTitle } from '../../components/PageTitle';
import { TabContent } from '../../components/TabContent';
import { TabsNav } from '../../components/TabsNav';

export const TabsPage: React.FC = () => {
  const { tabId } = useParams();

  return (
    <>
      <PageTitle title="Tabs page" />
      <TabsNav params={tabId} />
      <TabContent params={tabId} />
    </>
  );
};
