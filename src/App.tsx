import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Link, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import classNames from 'classnames';
import { TabsPage } from './components/TabsPage';

const Navigation = () => {
  const { pathname } = useLocation();

  return (
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <div
            className={classNames('navbar-item', {
              'is-active': pathname === '/',
            })}
          >
            <Link to="/">Home</Link>
          </div>
          <div
            className={classNames('navbar-item', {
              'is-active': pathname.startsWith('/tabs'),
            })}
          >
            <Link to="/tabs">Tabs</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

const PageTitle = ({ children }: { children: React.ReactNode }) => (
  <h1 className="title">{children}</h1>
);

export const App = () => (
  <>
    <Navigation />

    <div className="section">
      <div className="container">
        <Routes>
          <Route index element={<PageTitle>Home page</PageTitle>} />
          <Route path="home" element={<Navigate to="/" replace />} />
          <Route path="tabs">
            <Route index element={<TabsPage />} />
            <Route path=":tabId" element={<TabsPage />} />
          </Route>
          <Route path="*" element={<PageTitle>Page not found</PageTitle>} />
        </Routes>
      </div>
    </div>
  </>
);
