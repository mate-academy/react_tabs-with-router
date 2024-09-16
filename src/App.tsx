import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Tabs } from './components/Tabs';
import { NavLink, Navigate, Route, Routes } from 'react-router-dom';
import classNames from 'classnames';

export const App = () => {
  const isNavActive = ({ isActive }: { isActive: boolean }) =>
    classNames('navbar-item', {
      'is-active': isActive,
    });

  return (
    <>
      {/* Also requires <html class="has-navbar-fixed-top"> */}
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <NavLink to="/" className={isNavActive}>
              Home
            </NavLink>
            <NavLink to="/tabs" className={isNavActive}>
              Tabs
            </NavLink>
          </div>
        </div>
      </nav>
      <div className="section">
        <div className="container">
          <Routes>
            <Route path="/" element={<h1 className="title">Home page</h1>} />
            <Route path="/home" element={<Navigate to="/" />} />
            <Route
              path="*"
              element={<h1 className="title">Page not found</h1>}
            />
            <Route path="tabs">
              <Route index element={<Tabs />} />
              <Route path=":tabId?" element={<Tabs />} />
            </Route>
          </Routes>
        </div>
      </div>
    </>
  );
};
