import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { TabsPage } from './components/TabsPage';
import { NotFound } from './components/NotFound';
import { Home } from './components/Home';
import { LayoutPage } from './components/LayoutPage';

export const App = () => {
  const location = useLocation();

  if (location.pathname === '/home') {
    return <Navigate to="/" replace={true} />;
  }

  return (
    <>
      {/* Also requires <html class="has-navbar-fixed-top"> */}
      <div className="section">
        <div className="container">
          <Routes>
            <Route element={<LayoutPage />}>
              <Route path="/" element={<Home />} />
              <Route path="tabs">
                <Route index element={<TabsPage />}></Route>
                <Route path=":tabId" element={<TabsPage />}></Route>
              </Route>
              <Route path="*" element={<NotFound />}></Route>
            </Route>
          </Routes>
        </div>
      </div>
    </>
  );
};
