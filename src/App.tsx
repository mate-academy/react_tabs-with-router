import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Outlet } from 'react-router-dom';
import { MainNavigation } from './components/MainNavigation';

export const App = () => (
  <>
    <MainNavigation />
    <Outlet />
  </>
);
