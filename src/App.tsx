import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Navigation } from './components/Navigation/Navigation';
import { Container } from './components/Container/Container';

export const App = () => (
  <div className="has-navbar-fixed-top">
    <Navigation />
    <Container />
  </div>
);
