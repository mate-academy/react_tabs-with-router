import { Outlet, Navigate, useLocation } from 'react-router-dom';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Navigation } from './components/Navigation';

export const App = () => {
  const location = useLocation();
  const isHome = location.pathname === '/home';

  if (isHome) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <Navigation />
      <div className="section">
        <div className="container">
          <Outlet />
        </div>
      </div>
    </>
  )
};
