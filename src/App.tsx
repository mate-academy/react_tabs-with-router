import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { NavLink, Routes, Route, Navigate } from 'react-router-dom';
import classNames from 'classnames';
import { Home } from './components/Home';
import { Tabs } from './components/Tabs';

export const App = () => {
  const isActiveLink = ({ isActive }, className?: string) => {
    return classNames(className, { 'is-active': isActive });
  };

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
              end
              className={({ isActive }) =>
                isActiveLink({ isActive }, 'navbar-item')
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/tabs"
              className={({ isActive }) =>
                isActiveLink({ isActive }, 'navbar-item')
              }
            >
              Tabs
            </NavLink>
          </div>
        </div>
      </nav>

      <div className="section">
        <div className="container">
          <Routes>
            <Route path="/home" element={<Navigate to="/" replace />}></Route>
            <Route path="/" element={<Home />}></Route>
            <Route path="/tabs">
              <Route index element={<Tabs />}></Route>
              <Route path=":tabId" element={<Tabs />}></Route>
            </Route>
            <Route
              path="*"
              element={<h1 className="title">Page not found</h1>}
            ></Route>
          </Routes>
        </div>
      </div>
    </>
  );
};
