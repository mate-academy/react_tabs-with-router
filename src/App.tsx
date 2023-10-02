import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { useContext } from 'react';
import {
  Routes,
  Route,
  NavLink,
} from 'react-router-dom';
import classNames from 'classnames';
import { HomePage } from './components/HomePage';
import { StateContext } from './components/Tabs/TabContext';
import { Tabs } from './components/Tabs';

export const App: React.FC = () => {
  const { state } = useContext(StateContext);

  const linkClass = (
    { isActive }: { isActive: boolean },
  ) => classNames('navbar-item', { 'is-active': isActive });

  return (
    <>
      {/* Also requires <html class="has-navbar-fixed-top"> */}
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <NavLink to="/" className={linkClass}>Home</NavLink>
            <NavLink to="/tabs" className={linkClass}>Tabs</NavLink>
          </div>
        </div>
      </nav>

      <div className="section">
        <div className="container">
          {state.content.length > 0 && (
            <h1 className="title">Tabs page</h1>
          )}

          <div className="tabs is-boxed">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="tabs">
                <Route index element={<Tabs />} />
                <Route path=":tabId?" element={<Tabs />} />
              </Route>
              <Route
                path="*"
                element={<p className="title">Page not found</p>}
              />
            </Routes>
          </div>

          <div className="block" data-cy="TabContent">
            {state.content}
          </div>
        </div>
      </div>
    </>
  );
};
