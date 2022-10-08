import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Navigate, Route, Routes } from 'react-router-dom';
import { PageNavLink } from './components/PageNavLink/PageNavLink';
import { HomePage } from './components/pages/HomePage';
import { NoPage } from './components/pages/NoPage';
import { TabsPage } from './components/pages/TabsPage';

export const App = () => (
  <>
    {/* Also requires <html class="has-navbar-fixed-top"> */}
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <PageNavLink to="/" text="Home" />
          <PageNavLink to="/tabs" text="Tabs" />
        </div>
      </div>
    </nav>

    <div className="section">
      <div className="container">
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="home" element={<Navigate to="/" replace />} />

          <Route path="*" element={<NoPage />} />

          <Route path="tabs">
            <Route index element={<TabsPage />} />
            <Route path=":tabId" element={<TabsPage />} />
          </Route>

        </Routes>
      </div>
    </div>
  </>
);
