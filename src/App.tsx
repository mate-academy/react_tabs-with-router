import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { NavBar } from './components/NavBar';
import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';

export const App = () => {
  useEffect(() => {
    document.documentElement.classList.add('has-navbar-fixed-top');

    return () => {
      document.documentElement.classList.remove('has-navbar-fixed-top');
    };
  }, []);

  return (
    <>
      <NavBar />
      <div className="section">
        <div className="container">
          <Outlet />
        </div>
      </div>
    </>
  );
};
