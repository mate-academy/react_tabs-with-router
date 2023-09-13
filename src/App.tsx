import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Navigation } from './components/Navigation';
import { Rout } from './components/Rout';

export const App = () => (
  <>
    <Navigation />
    <Rout />
  </>
);
