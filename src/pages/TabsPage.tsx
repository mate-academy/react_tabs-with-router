import { Outlet } from 'react-router-dom';
import { Tabs } from '../components/Tabs/Tabs';
import React from 'react';

export const TabsPage = () => {
  return (
    <React.Fragment>
      <h1 className="title">Tabs page</h1>
      <Tabs />
      <Outlet />
    </React.Fragment>
  );
};
