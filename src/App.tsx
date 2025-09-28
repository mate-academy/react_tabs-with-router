import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import { Tabs } from './components/Tabs/Tabs';
// import { Home } from './components/Home/Home';

export const App = () => {
  return (
    <>
      {/* Also requires <html class="has-navbar-fixed-top"> */}
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? 'navbar-item is-active' : 'navbar-item'
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/tabs"
              className={({ isActive }) =>
                isActive ? 'navbar-item is-active' : 'navbar-item'
              }
            >
              Tabs
            </NavLink>
          </div>
        </div>
      </nav>

      <div className="section">
        <Routes>
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="/" element={<h1 className="title">Home page</h1>} />
          <Route path="/tabs">
            <Route index element={<Tabs />} />
            <Route path=":tabId" element={<Tabs />} />
          </Route>

          <Route path="*" element={<h1 className="title">Page not found</h1>} />
        </Routes>
      </div>
    </>
  );
};
