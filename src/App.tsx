import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Outlet } from 'react-router-dom';
import NavigatePanel from './components/NavigatePanel/NavigatePanel';

export const App: React.FC = () => (
  <>
    <NavigatePanel />

    <div className="section">
      <div className="container">
        <Outlet />
      </div>
    </div>
  </>
);
