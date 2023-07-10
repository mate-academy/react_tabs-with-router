import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { NavBar } from '../NavBar';

export const Layout: FC = () => (
  <>
    <NavBar />

    <main className="section">
      <div className="container">
        <Outlet />
      </div>
    </main>
  </>
);
