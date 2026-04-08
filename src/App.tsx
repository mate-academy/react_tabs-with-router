import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

import { Navbar } from './Navbar/Navbar';
import { Outlet } from 'react-router-dom';

export const App = () => (
  <>
    {/* Also requires  */}
    <Navbar />

    <div className="section">
      <div className="container">
        <Outlet />
      </div>
    </div>
  </>
);
