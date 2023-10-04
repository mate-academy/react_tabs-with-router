import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import {
  NavLink, Navigate, Route, Routes,
} from 'react-router-dom';

import cn from 'classnames';
import { Tabs } from './Components/Tabs';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App = () => {
  const IsActive = ({ isActive }: { isActive: boolean }) => {
    return cn('navbar-item', { 'is-active': isActive });
  };

  return (
    <>
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <NavLink to="/" className={IsActive}>Home</NavLink>
            <NavLink to="/tabs" className={IsActive}>Tabs</NavLink>
          </div>
        </div>
      </nav>

      <div className="section">

        <div className="container">
          <Routes>
            <Route path="/" element={<h1 className="title">Home page</h1>} />

            <Route
              path="/tabs/"
              element={<Tabs tabs={tabs} />}
            />
            <Route path="/tabs/:tabId" element={<Tabs tabs={tabs} />} />

            <Route
              path="/home"
              element={<Navigate to="/" />}
            />

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
