import { Navigation } from './components/Navigation';
import { Container } from './components/Container';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

export const App = () => (
  <div className="has-navbar-fixed-top">
    <Navigation />

    <Container />
  </div>
);
