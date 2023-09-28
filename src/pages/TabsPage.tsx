import { Outlet } from 'react-router-dom';
import { TabsList } from '../components/TabsList';

export const TabsPage = () => {
  return (
    <>
      <h1 className="title">Tabs page</h1>
      <TabsList />

      <Outlet />
    </>
  );
};
