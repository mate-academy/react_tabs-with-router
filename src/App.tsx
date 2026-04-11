import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { NavBar } from './components/NavBar';
import { Outlet } from 'react-router-dom';

export const App = () => (
  <>
    {/* Also requires <html class="has-navbar-fixed-top"> */}
    <NavBar />

    <div className="section">
      <div className="container">
        <Outlet />
      </div>
    </div>
  </>
);
