import { Outlet } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

export const App: React.FC = () => {
  return (
    <>
      <Navigation />

      <div className="section">
        <Outlet />
      </div>
    </>
  );
};
