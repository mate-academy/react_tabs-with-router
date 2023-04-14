import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Navbar } from './components/Navbar';
import { MainRoutes } from './routes';

export const App = () => (
  <>
    <Navbar />

    <div className="section">
      <div className="container">
        <MainRoutes />
      </div>
    </div>
  </>
);
