import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import {
  Navigate,
  NavLink,
  Route,
  Routes,
  useNavigate,
  useParams,
} from 'react-router-dom';
import classNames from 'classnames';
import { useEffect } from 'react';
import { HomePage } from './components/HomePage';
import { TabsPage } from './components/TabsPage';
import { ErrorPage } from './components/ErrorPage';

export const App = () => {
  const { home } = useParams();
  const navigate = useNavigate();

  const isPageActive = ({ isActive }: { isActive: boolean }) => {
    return classNames('navbar-item', {
      'is-active': isActive,
    });
  };

  useEffect(() => {
    navigate('/');
  }, [home]);

  return (
    <>
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <NavLink to="/" className={isPageActive}>Home</NavLink>
            <NavLink to="/tabs" className={isPageActive}>Tabs</NavLink>
          </div>
        </div>
      </nav>

      <div className="section">
        <div className="container">
          <Routes>
            <Route path="/" element={<App />} />

            <Route index element={<HomePage />} />
            <Route path="home" element={<Navigate to="/" />} />

            <Route path="tabs">
              <Route index element={<TabsPage />} />
              <Route path=":tabId" element={<TabsPage />} />
            </Route>

            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
      </div>
    </>
  );
};
