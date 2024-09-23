import { useState } from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import { HomePage } from './Components/HomePage';
import { TabsPage } from './Components/TabsPage';
import classNames from 'classnames';

type Page = 'home' | 'tabs';

const getLinkClass = ({ isActive }: { isActive: boolean }) =>
  classNames('navbar-item', {
    'is-active': isActive,
  });

export const App = () => {
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
            <NavLink
              to="/"
              className={getLinkClass}
              onClick={() => setPage('home')}
            >
              Home
            </NavLink>
            <NavLink
              to="/tabs"
              className={getLinkClass}
              onClick={() => setPage('tabs')}
            >
              Tabs
            </NavLink>
          </div>
        </div>
      </nav>

      <div className="section">
        <div className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />

            <Route path="/tabs">
              <Route index element={<TabsPage />} />
              <Route path=":tabId" element={<TabsPage />} />
            </Route>
          </Routes>

          {page !== 'home' && <h1 className="title">Page not found</h1>}
        </div>
      </div>
    </>
  );
};
