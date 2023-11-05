import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Outlet } from 'react-router-dom';
import { NavPage } from './Pages/NavPage';

export const App = () => {
  return (
    <>
      <NavPage />

      <div className="section">
        <div className="container">
          <Outlet />
        </div>
      </div>
    </>
  );
};
