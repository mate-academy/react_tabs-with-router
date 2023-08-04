import './App.scss';

import { Outlet } from 'react-router-dom';
import { Navigation } from './Components/Navigation';

export const App = () => (
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
