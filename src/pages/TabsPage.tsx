import { useParams } from 'react-router-dom';
import { FC } from 'react';
import { Tabs } from '../components/Tabs';

export const TabsPage:FC = () => {
  const { tabId = undefined } = useParams();

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <Tabs selectedTabId={tabId} />
    </>
  );
};
