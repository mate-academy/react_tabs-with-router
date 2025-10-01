import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Router } from './routes/Router';
import { NavMenu } from './components/NavMenu';

export const App = () => (
  <>
    <NavMenu />
    <div className="section">
      <div className="container">
        <Router />
      </div>
    </div>
  </>
);
