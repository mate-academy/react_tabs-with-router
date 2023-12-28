import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import classNames from 'classnames';
import { useEffect } from 'react';
import {
  Route,
  Routes,
  NavLink,
  useNavigate,
} from 'react-router-dom';
import { Home } from './components/Home';
import { Tabs } from './components/Tabs';

const isLinkActive = ({ isActive }: { isActive: boolean }) => (
  classNames('navbar-item', {
    'is-active': isActive,
  })
);

export const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (window.location.hash === '#/home') {
      navigate('/');
    }
  }, [navigate]);

  return (
    <>
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <NavLink
              to="/"
              className={isLinkActive}
            >
              Home
            </NavLink>
            <NavLink
              to="/tabs"
              className={isLinkActive}
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
            <Route path="/tabs">
              <Route path=":tabId?" element={<Tabs />} />
            </Route>
            <Route
              path="*"
              element={<h1 className="title">Page not found</h1>}
            />
          </Routes>
        </div>
      </div>
    </>
  );
};
