import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { NavBar } from './components/NavBar';
import { AppRoutes } from './components/AppRoutes';

export const App = () => (
  <>
    <NavBar />
    <div className="section">
      <AppRoutes />
    </div>
  </>
);
