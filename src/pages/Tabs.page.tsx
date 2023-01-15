import { Outlet } from 'react-router-dom';
import { TabNavigation } from '../components/layout/TabNavigation';

export const TabsPage = () => {
  return (
    <div>
      {' '}
      <h1 className="title">Tabs page</h1>
      <TabNavigation />
      <Outlet />
    </div>
  );
};
