import { Outlet } from 'react-router-dom';
import { TabsList } from '../components';

export const TabsPage = () => (
  <>
    <h1 className="title">Tabs Page</h1>
    <TabsList />
    <Outlet />
  </>
);
