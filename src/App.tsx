import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Nav } from './components/Nav/Nav';
import { Outlet } from 'react-router-dom';

export const App = () => (
  <>
    {/* Also requires <html class="has-navbar-fixed-top"> */}
    <Nav />
    <div className="section">
      <div className="container">
        <Outlet />
      </div>
    </div>
  </>
);
