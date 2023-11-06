import { Outlet } from 'react-router-dom';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { NavPage } from './components/NavPage';

export const App = () => (
  <>
    {/* Also requires <html class="has-navbar-fixed-top"> */}
    <NavPage />

    <div className="section">
      <div className="container">
        <Outlet />
      </div>
    </div>
  </>
);
