import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Outlet } from 'react-router-dom';
import { PageNav } from './components/PageNav';

export const App = () => (
  <>
    <PageNav />

    <div className="section">
      <div className="container">
        <Outlet />
      </div>
    </div>
  </>
);
