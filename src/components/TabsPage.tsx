import { Outlet } from 'react-router-dom';
import { TabsList } from './TabsList';

export const TabsPage = () => (
  <>
    <h1 className="title">Tabs page</h1>
    <TabsList />
    <Outlet />
  </>
);
