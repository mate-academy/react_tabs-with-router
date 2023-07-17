import { Outlet } from 'react-router-dom';
import { Navigation } from './Navigation';

export const Layout = () => (
  <>
    <Navigation />

    <div className="section">
      <Outlet />
    </div>
  </>
);
