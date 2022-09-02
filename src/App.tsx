import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import classNames from 'classnames';
import { NavLink, Route, Routes } from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { PageNotFound } from './components/PageNotFound';
import { TabsPage } from './components/TabsPage';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App = () => (
  <>
    {/* Also requires <html class="has-navbar-fixed-top"> */}
    <nav className="navbar is-fixed-top is-mobile has-shadow" data-cy="nav">
      <div className="container">
        <div className="navbar-brand">
          <NavLink
            to="/"
            replace
            className={({ isActive }) => classNames('navbar-item',
              { 'is-active': isActive })}
          >
            Home
          </NavLink>
          <NavLink
            to="tabs"
            className={({ isActive }) => classNames('navbar-item',
              { 'is-active': isActive })}
            replace
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
            path="*"
            element={
              <PageNotFound />
            }
          />
          <Route
            path="/"
            element={
              <HomePage />
            }
          />
          <Route path="tabs">
            <Route
              index
              element={<TabsPage tabs={tabs} />}
            />
            <Route
              path=":tabId"
              element={<TabsPage tabs={tabs} />}
            />
          </Route>
        </Routes>
        {/* <h1 className="title">Home page</h1> */}
        {/* <h1 className="title">Tabs page</h1> */}
        {/* <h1 className="title">Page not found</h1> */}

        {/* <div className="tabs is-boxed">
          <ul>
            <li data-cy="tab" className="is-active">
              <a href="#/">Tab 1</a>
            </li>
            <li data-cy="tab">
              <a href="#/">Tab 2</a>
            </li>
            <li data-cy="tab">
              <a href="#/">Tab 3</a>
            </li>
          </ul>
        </div>

        <div className="block" data-cy="tab-content">
          Please select a tab
        </div> */}
      </div>
    </div>
  </>
);

export default App;
