import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Navigate, Route, Routes } from 'react-router-dom';
import { MainNavLink } from './components/MainNavLink';
import { TabPages } from './components/TabPages';

export const App = () => (
  <>
    {/* Also requires <html class="has-navbar-fixed-top"> */}
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <MainNavLink to="/" title="Home" />
          <MainNavLink to="/tabs" title="Tabs" />
        </div>
      </div>
    </nav>

    <div className="section">
      <div className="container">
        <Routes>
          <Route path="/" element={<h1 className="title">Home page</h1>} />
          <Route path="/home" element={<Navigate to="/" />} />
          <Route path="*" element={<h1 className="title">Page not found</h1>} />
          <Route path="tabs" element={<TabPages />}>
            <Route path=":tabId" element={<TabPages />} />
          </Route>
        </Routes>
      </div>
    </div>
  </>
);
