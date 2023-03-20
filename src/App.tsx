import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import { Outlet } from 'react-router-dom';
import './App.scss';
import { NavBar } from './components/NavBar';

export const App = () => (
  <>
    <NavBar />

    <Outlet />
  </>
);
