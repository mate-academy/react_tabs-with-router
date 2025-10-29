import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Outlet } from 'react-router-dom';
import { NavMenu } from './components/NavMenu/NavMenu';

export const App = () => (
  <>
    <NavMenu />
    <div className="section">
      <Outlet />
    </div>
  </>
);
