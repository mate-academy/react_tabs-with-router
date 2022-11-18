import { FC, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { Tab } from '../../types/Tab';
import { tabs } from '../../utils/App.Constants';
import { Tabs } from './Tabs/Tabs';
import { TabsContent } from './Tabs/TabsContent';

export const TabsPage: FC = () => {
  const { tabId = '' } = useParams();
  const currentTab: Tab | null = useMemo(
    () => tabs.find(tab => tab.id === tabId) || null, [tabId],
  );

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <Tabs tabId={tabId} />

      {!currentTab
        ? <TabsContent text="Please select a tab" />
        : <TabsContent text={currentTab.content} />}
    </>
  );
};
