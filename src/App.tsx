import {
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { NavLinkItem } from './components/NavLinkItem';
import { Tabs } from './components/Tabs';

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
          <Route index element={<Tabs />} />
          <Route path=":selectedTabId" element={<Tabs />} />
        </Route>

        <Route
          path="/"
          element={<h1 className="title">Home page</h1>}
        />

        <Route
          path="/home"
          element={<Navigate to="/" replace />}
        />

        <Route
          path="*"
          element={<h1 className="title">Page not found</h1>}
        />
      </Routes>
    </div>
  </>
);
