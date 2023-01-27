import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import {
  Navigate, Outlet, Route, Routes,
} from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { TabsPage } from './components/TabsPage/TabsPage';

export const App = () => (
  <>
    {/* Also requires <html class="has-navbar-fixed-top"> */}
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <Navbar />
      </div>
    </nav>

    <div className="section">
      <div className="container">
        <Routes>
          <Route path="/" element={<h1 className="title">Home page</h1>} />
          <Route path="home" element={<Navigate to="/" replace />} />
          <Route
            path="tabs"
            element={(
              <>
                <h1 className="title">Tabs page</h1>
                <Outlet />
              </>
            )}
          >
            <Route index element={<TabsPage />} />
            <Route path=":tabId" element={<TabsPage />} />
          </Route>
          <Route path="*" element={<h1 className="title">Page not found</h1>} />
        </Routes>
      </div>
    </div>
  </>
);
