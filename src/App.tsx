import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Navbar } from './components/Navbar';
import { MainSection } from './components/MainSection';

export const App = () => (
  <>
    <Navbar />
    <MainSection />
  </>
);
