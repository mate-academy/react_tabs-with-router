import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Outlet } from 'react-router-dom';
import { NavMain } from './components/NavMain';

export const App = () => (
  <>
    <NavMain />
    <div className="section">
      <Outlet />
    </div>
  </>
);
