import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { tabs } from '../api/tabs';
import { Tabs } from './Tabs';

export const TabsPage: FC = () => {
  return (
    <>
      <h1 className="title">Tabs page</h1>
      <Tabs tabs={tabs} />
      <Outlet />
    </>
  );
};
