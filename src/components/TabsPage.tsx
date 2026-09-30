import { Outlet } from 'react-router-dom';

export const TabsPage = () => {
  return (
    <>
      <h1 className="title">Tabs page</h1>
      <Outlet />
    </>
  );
};
