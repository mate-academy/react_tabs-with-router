import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Link, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { Home } from './pages/home/Home';
import { Tabs } from './pages/tabs/Tabs';
import { NotFound } from './pages/not-found/NotFound';

export const App = () => {
  const location = useLocation();

  if (location.pathname === '/home') {
    return <Navigate to="/" />;
  }

  return (
    <>
      {/* Also requires <html class="has-navbar-fixed-top"> */}
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item">
              Home
            </Link>
            <Link to="/tabs" className="navbar-item">
              Tabs
            </Link>
          </div>
        </div>
      </nav>

      <div className="section">
        <div className="container">
              <Routes>
                <Route path="/" index element={<Home />} />
                <Route path="tabs" element={<Tabs />}>
                  <Route path=":tabId" element={<Tabs />} />
                </Route>
                <Route path="*" element={<NotFound />} />
              </Routes>
        </div>
      </div>
    </>
  );
};
