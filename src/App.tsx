import { Outlet } from 'react-router-dom';

import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

import { Nav } from './components/Nav';

export const App = () => (
  <>
    <div className="section">
      <div className="container">
        <Nav />
        <Outlet />
      </div>
    </div>
  </>
);
