import { Outlet } from 'react-router-dom';

import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

import { NavBar } from './components/NavBar';

export const App = () => (
  <>
    <NavBar />

    <main className="section">
      <Outlet />
    </main>
  </>
);
