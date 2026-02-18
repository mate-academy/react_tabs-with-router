import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

// import { useState } from 'react';
import { HomePage } from './pages/HomePage';
import { TabsPage } from './pages/TabsPage';
import { NavLink, Route, Routes } from 'react-router-dom';
import classNames from 'classnames';

// type Page = 'home' | 'tabs';

export const App: React.FC = () => {
  // const [page, setPage] = useState<Page>('home');
  function getLinkClass({ isActive }: { isActive: boolean }) {
    return classNames('navbar-item', { 'is-active': isActive });
  }

  return (
    <>
      {/* Also requires <html class="has-navbar-fixed-top"> */}
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <NavLink to="/" className={getLinkClass} end>
              Home
            </NavLink>
            <NavLink to="/tabs" className={getLinkClass}>
              Tabs
            </NavLink>
          </div>
        </div>
      </nav>

      <div className="section">
        <div className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />

            <Route path="tabs">
              <Route index element={<TabsPage />} />
              <Route path=":tabId" element={<TabsPage />} />
            </Route>

            <Route path="*" element={<p>Page not found</p>} />
          </Routes>
        </div>
      </div>
    </>
  );
};
