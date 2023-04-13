import './App.scss';
import { Outlet } from 'react-router-dom';
import { MainNav } from './components/MainNav';

export const App = () => (
  <>
    <MainNav />

    <div className="section">
      <div className="container">
        <Outlet />
      </div>
    </div>
  </>
);
