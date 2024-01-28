import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import {
  Routes, Route, NavLink, useNavigate,
} from 'react-router-dom';
import { useEffect } from 'react';
import classNames from 'classnames';
import { Tabs } from './pages/Tabs';
import { Home } from './pages/Home';
import { Error } from './pages/Error';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const getLinkClass = ({ isActive }: { isActive: boolean }) => {
  return classNames('navbar-item', { 'is-active': isActive });
};

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
            <NavLink to="/" className={getLinkClass}>Home</NavLink>
            <NavLink to="/tabs" className={getLinkClass}>Tabs</NavLink>
          </div>
        </div>
      </nav>

      <div className="section">
        <div className="container">
          <Routes>
            <Route index element={<Home />} />
            <Route path="tabs">
              <Route index element={<Tabs tabs={tabs} />} />
              <Route path=":tabId" element={<Tabs tabs={tabs} />} />
            </Route>
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
      </div>
    </>
  );
};
