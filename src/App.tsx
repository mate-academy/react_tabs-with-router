import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Routes, Route, Navigate } from 'react-router-dom';
import { NavigationLink } from './components/NavigationLink';
import { TabPages } from './pages/TabPages';
import { HomePage } from './pages/HomePage';
import { PageNotFound } from './pages/PageNotfound';

export const App = () => (
  <>
    {/* Also requires <html class="has-navbar-fixed-top"> */}
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavigationLink to="/" title="Home" />
          <NavigationLink to="/tabs" title="Tabs" />
        </div>
      </div>
    </nav>

    <div className="section">
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />}>
            <Route path=":tabId" element={<TabPages />} />
          </Route>

          <Route path="/home" element={<Navigate to="/" replace />} />

          <Route path="*" element={<PageNotFound />} />

          <Route path="/tabs" element={<TabPages />}>
            <Route path=":tabId" element={<TabPages />} />
          </Route>
        </Routes>
      </div>
    </div>
  </>
);
