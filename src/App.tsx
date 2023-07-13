import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Outlet } from 'react-router-dom';
import { MainNav } from './components/MainNav';

export const App = () => (
  <>
    <MainNav />
    <div className="section">
      <Outlet />
    </div>
  </>
);
