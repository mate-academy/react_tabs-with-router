import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

import { Route, Routes, Navigate } from 'react-router-dom';
import { Nav } from './components/Nav';
import { TabsPage } from './components/TabsPage';

export const App = () => (
  <>
    <Nav />
    <div className="section">
      <div className="container">
        <Routes>
          {/* Redirect from /home to / */}
          <Route path="/home" element={<Navigate to="/" replace />} />

          {/* Home page route */}
          <Route path="/" element={<h1 className="title">Home page</h1>} />

          {/* Tabs page route including nested route handling */}
          <Route path="/tabs" element={<TabsPage />}>
            <Route index element={<TabsPage />} />
            <Route path=":tabId" element={<TabsPage />} />
          </Route>

          {/* Catch-all route for 404 page not found */}
          <Route path="*" element={<h1 className="title">Page not found</h1>} />
        </Routes>
      </div>
    </div>
  </>
);
