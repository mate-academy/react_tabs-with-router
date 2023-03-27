import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Navbar } from './components/NavBar';
import { Main } from './components/Main';

export const App = () => (
  <>
    <Navbar />
    <Main />
  </>
);
