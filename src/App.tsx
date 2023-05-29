import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Navigate, Route, Routes } from 'react-router-dom';
import { NavLinkItem } from './components/NavLinkItem';
import { HomePage } from './components/HomePage';
import { TabsPage } from './components/TabsPage.tsx';
import { PageNotFound } from './components/PageNotFound';

export const App = () => (
  <>
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavLinkItem to="/" title="Home" />
          <NavLinkItem to="/tabs" title="Tabs" />
        </div>
      </div>
    </nav>

    <div className="section">
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Home" element={<Navigate to="/" replace />} />

          <Route path="/tabs" element={<TabsPage />}>
            <Route index element={<TabsPage />} />
            <Route path=":tabId" element={<TabsPage />} />
          </Route>

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </div>
  </>
);
