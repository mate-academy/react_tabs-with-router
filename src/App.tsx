import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import {
  NavLink, Route, Routes, useNavigate,
} from 'react-router-dom';
import { useEffect } from 'react';
import { Tabs } from './components/Tabs';
import { Home } from './components/Home';
import { Error } from './components/Error';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App = () => {
  function RedirectHome() {
    const navigate = useNavigate();

    useEffect(() => {
      navigate('/');
    }, [navigate]);

    return null;
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
            <NavLink
              to="/"
              className={
                ({ isActive }) => (
                  isActive
                    ? 'navbar-item is-active'
                    : 'navbar-item')
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/tabs"
              className={
                ({ isActive }) => (
                  isActive
                    ? 'navbar-item is-active'
                    : 'navbar-item')
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
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<RedirectHome />} />
            <Route path="/tabs/*" element={<Tabs tabs={tabs} />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
      </div>
    </>
  );
};
