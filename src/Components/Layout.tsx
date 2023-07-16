import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Navigation } from './Navigation';

export const Layout: FC = () => (
  <>
    <Navigation />

    <div className="section">
      <div className="container">
        <Outlet />
      </div>
    </div>
  </>
);
