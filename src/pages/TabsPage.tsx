import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import { Tabs } from '../components/Tabs';

export const TabsPage: FC = () => {
  return (
    <>
      <h1 className="title">Tabs page</h1>
      <Tabs />
      <Outlet />
    </>
  );
};
