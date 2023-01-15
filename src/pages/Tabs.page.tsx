import { FC } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { TabNavigation } from '../components/layout/TabNavigation';

export const TabsPage: FC = () => {
  const { tabId } = useParams<{ tabId: string }>();

  return (
    <div>
      {' '}
      <h1 className="title">Tabs page</h1>
      <TabNavigation />
      <Outlet />
      {!tabId && <p>Please select a tab</p>}
    </div>
  );
};
