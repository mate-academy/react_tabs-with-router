import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

import { Outlet } from 'react-router-dom';
import { Navbar } from './components/NavBar/NavBar';

export const App = () => (
  <>
    <Navbar />

    <div className="section">
      <div className="container">
        <Outlet />
      </div>
    </div>
  </>
);
