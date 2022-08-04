import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';

import {
  Route, Routes, Navigate,
} from 'react-router-dom';

import { TabsPage } from './elements/TabsPage';
import { NotFoundPage } from './elements/NotFoundPage';
import { Navigation } from './elements/Navigation';

const App = () => (
  <>
    {/* Also requires <html class="has-navbar-fixed-top"> */}
    <Navigation />
    <Routes>
      <Route
        path="/"
        element={<p className="title">Home Page</p>}
      />
      <Route path="/tabs">
        <Route path=":tabId" element={<TabsPage />} />
        <Route index element={<TabsPage />} />
      </Route>
      <Route
        path="/home"
        element={<Navigate to="/" />}
      />
      <Route
        path="*"
        element={<NotFoundPage />}
      />
    </Routes>
  </>
);

export default App;
