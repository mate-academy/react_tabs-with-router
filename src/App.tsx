import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Navigate, Route, Routes } from 'react-router-dom';
import { TabsPage } from './pages/TabsPage';
import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { Navigation } from './Components/Navigation';

export const App = () => (
  <>
    <Navigation />

    <div className="section">
      <div className="container">
        <Routes>
          <Route path="/">
            <Route index element={<HomePage />} />
            <Route path="home" element={<Navigate to="/" replace />} />
            <Route path="tabs" element={<TabsPage />}>
              <Route path=":tabId" element={<TabsPage />} />
            </Route>
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </div>
  </>
);
