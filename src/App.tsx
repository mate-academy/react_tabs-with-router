import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Navigate, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { TabsPages } from './pages/TabsPages';
import { CustomLink } from './CustomLink';
import { PageNotFound } from './pages/PageNotFound';

export const App = () => (
  <>
    {/* Also requires <html class="has-navbar-fixed-top"> */}
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <CustomLink to="/" title="Home" />
          <CustomLink to="/tabs" title="Tabs" />
        </div>
      </div>
    </nav>

    <div className="section">
      <div className="container">
        <Routes>
          <Route path="*" element={<PageNotFound />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/tabs" element={<TabsPages />}>
            <Route path=":tabId" element={<TabsPages />} />
          </Route>
          <Route path="/home" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </div>
  </>
);
