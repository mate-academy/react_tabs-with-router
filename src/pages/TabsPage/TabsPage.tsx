import React from 'react';
import { Tabs } from '../../components/Tabs';
import { tabs } from '../../api/tabs';
import { Outlet } from 'react-router-dom';

export const TabsPage: React.FC = () => {
  return (
    <>
      <h1 className="title">Tabs page</h1>
      <Tabs tabs={tabs} />
      <Outlet />
    </>
  );
};
