import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Navigation } from './components/Navigation';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export const App = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname === '/home') {
      navigate('/');
    }
  }, [pathname, navigate]);

  return (
    <>
      <Navigation />

      <div className="section">
        <div className="container">
          <Outlet />
        </div>
      </div>
    </>
  );
};
