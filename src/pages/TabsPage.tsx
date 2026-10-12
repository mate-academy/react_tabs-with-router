import React from 'react';
import { Outlet } from 'react-router-dom';

export const TabsPage: React.FC = () => {
  return (
    <div className="container">
      <h1 className="title">Tabs page</h1>

      <Outlet />
    </div>
  );
};
