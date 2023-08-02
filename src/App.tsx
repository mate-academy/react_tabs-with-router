import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import classNames from 'classnames';

import {
  NavLink, Navigate, Route, Routes,
} from 'react-router-dom';
import { TabsList } from './components/TabsList';
import { Tab } from './types/Tab';
import { HomePage } from './components/HomePage';
import { PageNotFound } from './components/PageNotFound';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App = () => {
  const getLinkClass = ({ isActive }: { isActive: boolean }) => {
    return classNames('navbar-item', { 'is-active': isActive });
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
        <div className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="tabs">
              <Route index element={<TabsList tabs={tabs} />} />
              <Route path=":tabId" element={<TabsList tabs={tabs} />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
            <Route path="/home" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </div>
    </>
  );
};
