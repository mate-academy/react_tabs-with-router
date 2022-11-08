import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Outlet } from 'react-router-dom';
import { Nav } from './components/Nav';

export const App = () => (
  <>
    <Nav />

    <div className="section">
      <div className="container">
        <Outlet />
      </div>
    </div>
  </>
);
