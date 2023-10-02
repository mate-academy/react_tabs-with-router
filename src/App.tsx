import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Navigation } from './Components/Navigation/Navigation';
import { PageRouter } from './Components/PageRouter/PageRouter';

export const App = () => (
  <>
    {/* Also requires <html class="has-navbar-fixed-top"> */}
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <Navigation />
      </div>
    </nav>

    <div className="section">
      <PageRouter />
    </div>
  </>
);
