import { Outlet } from 'react-router-dom';
import { AppNavBar } from './components/AppNavBar';

export const Layout = () => (
  <>
    <AppNavBar />

    <div className="section">
      <div className="container">
        <Outlet />
      </div>
    </div>
  </>
);
