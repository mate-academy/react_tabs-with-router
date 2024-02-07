import 'bulma/css/bulma.css';
import cn from 'classnames';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { NavLink, Navigate, Route, Routes } from 'react-router-dom';
import { HomePage } from './HomePage';
import { TabsPage } from './TabsPage';
import { PageNotFound } from './PageNotFound';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const getNavLinkClassnames = ({ isActive }: { isActive: boolean }) => {
  return cn('navbar-item', {
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
          <NavLink to="/" className={getNavLinkClassnames}>
            Home
          </NavLink>
          <NavLink to="/tabs" className={getNavLinkClassnames}>
            Tabs
          </NavLink>
        </div>
      </div>
    </nav>

    <div className="section">
      <div className="container">
        <Routes>
          <Route path="/">
            <Route index element={<HomePage />} />
            <Route path="home" element={<Navigate to="../" />} />
            <Route path="tabs">
              <Route path=":tabId?" element={<TabsPage tabs={tabs} />} />
            </Route>
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </div>
  </>
);
