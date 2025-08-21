import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Navbar } from './Components/Navbar';
import { Outlet } from 'react-router-dom';

export const App = () => {
  return (
    <>
      <Navbar />

      <Outlet />
    </>
  );
};
