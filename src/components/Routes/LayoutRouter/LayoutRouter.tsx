import { Outlet } from 'react-router-dom';
import { FC } from 'react';
import { MainNav } from '../../MainNav';

export const LayoutRouter: FC = () => (
  <>
    <MainNav />
    <div className="section">
      <div className="container">
        <Outlet />
      </div>
    </div>
  </>
);
