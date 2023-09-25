import { Outlet } from 'react-router-dom';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { NavigationBar } from './components/NavigationBar/NavigationBar';

export const App = () => (
  <>
    <NavigationBar />
    <div className="section">
      <Outlet />
    </div>
  </>
);
