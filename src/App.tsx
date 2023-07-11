import {
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { NavLinkItem } from './components/NavLinkItem';
import { HomePage } from './pages/HomePage';
import { PageNotFound } from './pages/PageNotFound';
import { TabsPage } from './pages/TabsPage';

export const App = () => (
  <>
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavLinkItem
            title="Home"
            link="/"
          />

          <NavLinkItem
            title="Tabs"
            link="tabs"
          />
        </div>
      </div>
    </nav>

    <div className="section">
      <Routes>
        <Route path="tabs">
          <Route index element={<TabsPage />} />
          <Route path=":selectedTabId" element={<TabsPage />} />
        </Route>

        <Route
          path="/"
          element={<HomePage />}
        />

        <Route
          path="/home"
          element={<Navigate to="/" replace />}
        />

        <Route
          path="*"
          element={<PageNotFound />}
        />
      </Routes>
    </div>
  </>
);
