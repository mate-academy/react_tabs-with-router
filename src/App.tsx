import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Outlet } from 'react-router-dom';
import { Header } from './components/Header/Header';

export const App = () => (
  <>
    <Header />
    <div className="section">
      <div className="container">
        <Outlet />
      </div>
    </div>
  </>
);
