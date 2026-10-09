import { Link, Navigate, Route, Routes, useLocation } from 'react-router-dom';

import { Tabs } from './components/Tabs';
import './App.scss';

const HomePage = () => <h1 className="title">Home page</h1>;

const TabsPage = () => (
  <>
    <h1 className="title">Tabs page</h1>
    <Tabs />
  </>
);

const Navigation = () => {
  const { pathname } = useLocation();

  return (
    <nav data-cy="Nav">
      <ul>
        <li>
          <Link to="/" className={pathname === '/' ? 'is-active' : ''}>
            Home
          </Link>
        </li>

        <li>
          <Link
            to="/tabs"
            className={pathname.startsWith('/tabs') ? 'is-active' : ''}
          >
            Tabs
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export const App = () => (
  <>
    <Navigation />

    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<Navigate to="/" replace />} />

      <Route path="tabs">
        <Route index element={<TabsPage />} />
        <Route path=":tabId" element={<TabsPage />} />
      </Route>

      <Route path="*" element={<h1 className="title">Page not found</h1>} />
    </Routes>
  </>
);
