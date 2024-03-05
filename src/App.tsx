import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { TabsPage } from './components/TabsPage';

export const App = () => {
  return (
    <>
      {/* Also requires <html class="has-navbar-fixed-top"> */}

      <div className="section">
        <Navigation />
        <div className="container">
          <Routes>
            <Route path="/" element={<h1 className="title ">Home page</h1>} />

            <Route path="home" element={<Navigate to="/" />} />

            <Route path="tabs">
              <Route index element={<TabsPage />} />
              <Route path=":tabId" element={<TabsPage />} />
            </Route>

            <Route
              path="*"
              element={<h1 className="title">Page not found</h1>}
            />
          </Routes>
        </div>
      </div>
    </>
  );
};
