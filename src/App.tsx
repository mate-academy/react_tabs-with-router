import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

import { useState } from 'react';
import { HomePage } from './pages/HomePage';
import { TabsPage } from './pages/TabsPage';

type Page = 'home' | 'tabs';

export const App: React.FC = () => {
  const [page, setPage] = useState<Page>('home');

  return (
    <>
      {/* Also requires <html class="has-navbar-fixed-top"> */}
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <a
              href="#/"
              className="navbar-item is-active"
              onClick={() => setPage('home')}
            >
              Home
            </a>
            <a
              href="#/tabs"
              className="navbar-item"
              onClick={() => setPage('tabs')}
            >
              Tabs
            </a>
          </div>
        </div>
      </nav>

      <div className="section">
        <div className="container">
          {page === 'home' && <HomePage />}
          {page === 'tabs' && <TabsPage />}
        </div>
      </div>
    </>
  );
};
