import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Outlet } from 'react-router-dom';
import { GlobalNav } from './components/GlobalNav';

export const App = () => (
  <>
    <GlobalNav />

    <div className="section">
      <div className="container">
        <Outlet />
      </div>
    </div>
  </>
);
