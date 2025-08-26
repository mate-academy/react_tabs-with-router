import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Link, useLocation, Route, Routes, Navigate } from 'react-router-dom';
import { TabsPage } from './components/TabsPage';


const Home = () => <h1 className="title">Home page</h1>;
const NotFound = () => <h1 className="title">Page not found</h1>;

export const App = () => {
  const location = useLocation();
  const isHome = location.pathname === '/' || location.pathname === '';
  const isTabs = location.pathname.startsWith('/tabs');

  return (
    <>
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className={`navbar-item ${isHome ? 'is-active' : ''}`}>
              Home
            </Link>
            <Link
              to="tabs"
              className={`navbar-item ${isTabs ? 'is-active' : ''}`}
            >
              Tabs
            </Link>
          </div>
        </div>
      </nav>

      <div className="section">
        <div className="container">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Navigate to="/" replace />} />
            <Route path='tabs'>
              <Route index element={<TabsPage />} />
              <Route path=':tabId' element={<TabsPage />} />
            </Route>
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </>
  );
};
