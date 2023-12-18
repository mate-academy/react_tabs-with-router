import {
  NavLink,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import className from 'classnames';
import { HomePage } from './components/HomePage/HomePage';
import { Tabs } from './components/Tabs/Tabs';
import { NotFound } from './components/NotFound/NotFound';

const getLinkClass = ({ isActive } : { isActive: boolean }) => {
  return className('navbar-item', {
    'is-active': isActive,
  });
};

export const App = () => (
  <>
    {/* Also requires <html class="has-navbar-fixed-top"> */}
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavLink to="/" className={getLinkClass}>Home</NavLink>
          <NavLink to="/tabs" className={getLinkClass}>Tabs</NavLink>
        </div>
      </div>
    </nav>

    <div className="section">
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="/tabs">
            <Route index element={<Tabs />} />
            <Route path=":tabId" element={<Tabs />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  </>
);
