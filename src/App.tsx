import '@fortawesome/fontawesome-free/css/all.css';
import 'bulma/css/bulma.css';
import classNames from 'classnames';
import { Navigate, NavLink, Route, Routes } from 'react-router-dom';
import './App.scss';
import { TabsPage } from './TabsPage';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const PageNotFound = () => <p className="title">Page not found</p>;
const HomePage = () => <h1 className="title">Home page</h1>;

export const App = () => (
  <html className="has-navbar-fixed-top">
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavLink
            to="/"
            className={({ isActive }) => {
              return classNames('navbar-item', {
                'is-active': isActive,
              });
            }}
          >
            Home
          </NavLink>
          <NavLink
            to="/tabs"
            className={({ isActive }) => {
              return classNames('navbar-item', {
                'is-active': isActive,
              });
            }}
          >
            Tabs
          </NavLink>
        </div>
      </div>
    </nav>

    <div className="section">
      <div className="container">
        <Routes>
          <Route path="*" element={<PageNotFound />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="/tabs" element={<TabsPage tabs={tabs} />}>
            <Route path="/tabs/:tabId?" />
          </Route>
        </Routes>
      </div>
    </div>
  </html>
);
