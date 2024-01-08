import { Outlet } from 'react-router-dom';
import { Navigation } from './Navigation';

const Layout = () => (
  <>
    {/* Also requires <html class="has-navbar-fixed-top"> */}
    <Navigation />

    <div className="section">
      <div className="container">
        <Outlet />
      </div>
    </div>

  </>
);

export default Layout;
