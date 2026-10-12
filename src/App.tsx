import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Link, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import TabsPage from './components/TabsPage';
import HomePage from './components/HomePage';
import NotFoundPage from './components/NotFoundPage';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App = () => {
  const location = useLocation();

  return (
    <>
      {/* Also requires <html class="has-navbar-fixed-top"> */}
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link
              to="/"
              className={
                location.pathname === '/'
                  ? 'navbar-item is-active'
                  : 'navbar-item'
              }
            >
              Home
            </Link>
            <Link
              to="/tabs"
              className={
                location.pathname.startsWith('/tabs')
                  ? 'navbar-item is-active'
                  : 'navbar-item'
              }
            >
              Tabs
            </Link>
          </div>
        </div>
      </nav>

      <div className="section">
        <div className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="home" element={<Navigate to="/" replace />} />
            <Route path="tabs">
              <Route index element={<TabsPage tabs={tabs} />} />
              <Route path=":tabId" element={<TabsPage tabs={tabs} />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default App;
