import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import {
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';

import { TabsPage } from './pages/TabsPage';
import { Home } from './pages/Home';
import { PageNotFound } from './pages/PageNotFound';
import { Navigation } from './components/Navigation';

export const App = () => {
  const SiteMap = [
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/home',
      element: <Navigate to="/" replace />,
    },
    {
      path: '/tabs',
      element: <TabsPage />,
    },
    {
      path: '/tabs/:tabId',
      element: <TabsPage />,
    },
    {
      path: '*',
      element: <PageNotFound />,
    },
  ];

  return (
    <div className="has-navbar-fixed-top">
      <Navigation />
      <div className="section">
        <div className="container">
          <Routes>
            {SiteMap.map(route => (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              />
            ))}
          </Routes>
        </div>
      </div>
    </div>
  );
};
