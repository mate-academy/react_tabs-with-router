import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navigation } from '../Navigation/Navigation';

export const Layout: React.FC = () => (
  <>
    <Navigation />

    <div className="section">
      <Outlet />
    </div>
  </>
);
