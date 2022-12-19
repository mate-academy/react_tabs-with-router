import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Outlet } from 'react-router-dom';
import { Nav } from './Components/Nav';

export const App: React.FC = () => (
  <>
    <Nav />

    <div className="section">
      <Outlet />
    </div>
  </>
);
