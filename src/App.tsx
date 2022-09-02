import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import {
  Navigate,
  Outlet,
  Route,
  Routes,
} from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { HomePage } from './components/HomePage';
import { NotFoundPage } from './components/NotFoundPage';
import { TabsPage } from './components/TabsPage';

const App = () => (
  <Routes>
    <Route
      path="/"
      element={(
        <>
          <Navbar />

          <div className="section">
            <Outlet />
          </div>
        </>
      )}
    >
      <Route index element={<HomePage />} />
      <Route path="home" element={<Navigate to="/" replace />} />

      <Route path="tabs">
        <Route index element={<TabsPage />} />
        <Route path=":tabId" element={<TabsPage />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Route>
  </Routes>
);

export default App;
