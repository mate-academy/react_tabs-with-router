import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { MainNav } from './MainNav';

export const Layout: FC = () => (
  <>
    <MainNav />

    <div className="section">
      <Outlet />
    </div>
  </>
);
