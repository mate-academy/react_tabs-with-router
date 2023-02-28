import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import {
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { NavLinkPage } from './components/NavLinkPage';
import { PageHome } from './components/PageHome';
import { PageTabs } from './components/PageTabs';

import './App.scss';

export const App = () => (
  <>
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavLinkPage to="/" text="Home" />
          <NavLinkPage to="/tabs" text="Tabs" />
        </div>
      </div>
    </nav>

    <div className="section">
      <div className="container">
        <Routes>
          <Route path="/" element={<PageHome />} />
          <Route path="/home" element={<Navigate to="/" replace />} />

          <Route path="tabs">
            <Route index element={<PageTabs />} />
            <Route path=":tabId" element={<PageTabs />} />
          </Route>

          <Route path="*" element={<h1 className="title">Page not found</h1>} />
        </Routes>
      </div>
    </div>
  </>
);
