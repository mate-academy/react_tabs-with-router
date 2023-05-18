import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { Tabs } from '../../components/Tabs/Tabs';

export const TabsPage: FC = () => {
  const { tabId } = useParams<{ tabId: string }>();

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <Tabs selectedTabId={tabId} />
    </>
  );
};
