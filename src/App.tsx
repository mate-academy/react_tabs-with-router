import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import cn from 'classnames';
import {
  NavLink,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { Tabs } from './Components/Tabs';

// const { id } = useParams();

export const App = () => (
  <>
    {/* Also requires <html class="has-navbar-fixed-top"> */}
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavLink
            className={({ isActive }) => (
              cn(
                'navbar-item',
                { 'is-active': isActive },
              )
            )}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) => (
              cn(
                'navbar-item',
                { 'is-active': isActive },
              )
            )}
            to="/tabs"
          >
            Tabs
          </NavLink>
        </div>
      </div>
    </nav>

    <div className="section">
      <div className="container">
        <Routes>
          <Route
            path="/home"
            element={
              <Navigate to="/" replace />
            }
          />
          <Route
            path="/"
            element={
              <h1 className="title">Home page</h1>
            }
          />
          <Route path="tabs">
            <Route
              index
              element={(
                <Tabs />
              )}
            />
            <Route
              path=":tabId"
              element={
                <Tabs />
              }
            />
          </Route>
          <Route
            path="*"
            element={
              <h1 className="title">Page not found</h1>
            }
          />
        </Routes>
      </div>
    </div>
  </>
);
