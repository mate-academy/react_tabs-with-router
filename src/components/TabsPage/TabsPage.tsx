import { FC } from 'react';
import { useParams } from 'react-router-dom';

import { Tabs } from '../Tabs/Tabs';
import { tabs } from '../../api/tabs';

export const TabsPage: FC = () => {
  const { tabId } = useParams();

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <Tabs tabs={tabs} selectedTabId={tabId} />
    </>
  );
};
