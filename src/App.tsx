import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { NavLink, Navigate, Route, Routes } from 'react-router-dom';
import { HomePage } from './home';
import { TabsPage } from './tabs';
import { NotFound } from './not-found';

export const App = () => {
  const getLinkClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? 'navbar-item is-active' : 'navbar-item';

  return (
    <>
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <NavLink to="/" className={getLinkClass}>
              Home
            </NavLink>
            <NavLink to="/tabs" className={getLinkClass}>
              Tabs
            </NavLink>
          </div>
        </div>
      </nav>

      <div className="section">
        <Routes>
          <Route path="/">
            <Route index element={<HomePage />} />
            <Route path="home" element={<Navigate to="/" replace />} />
            <Route path="tabs">
              <Route path=":tabId?" element={<TabsPage />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </>
  );
};
