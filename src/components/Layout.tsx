import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Menu } from './Menu';

export const Layout: FC = () => (
  <>
    <Menu />

    <main className="section">
      <div className="container">
        <Outlet />
      </div>
    </main>
  </>
);
