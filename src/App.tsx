import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Outlet } from 'react-router-dom';
import { NavBar } from './components/NavBar/NavBar';

export const App = () => (
  <>
    {/* Also requires <html class="has-navbar-fixed-top"> */}
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <NavBar />
      </div>
    </nav>

    <div className="section">
      <div className="container">
        <Outlet />
      </div>
    </div>
  </>
);
