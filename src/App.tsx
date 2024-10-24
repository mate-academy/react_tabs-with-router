import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Navigate, useLocation } from 'react-router-dom';

import { Navigation } from './components/Navigaton';
import { Outlet } from 'react-router-dom';
export const App = () => {
  const { pathname } = useLocation();

  if (pathname === '/home') {
    return <Navigate to=".." replace />;
  }

  return (
    <>
      {/* Also requires <html class="has-navbar-fixed-top"> */}
      <Navigation />
      <div className="section">
        <Outlet />
      </div>
    </>
  );
};
