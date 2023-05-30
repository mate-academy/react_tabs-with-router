import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import TabsPage from './pages/TabsPage';

export const App = () => (
  <>
    <Navigation />

    <div className="section">
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/home" element={<Navigate to="/" replace />} />

          <Route path="*" element={<NotFound />} />

          <Route path="/tabs">
            <Route index element={<TabsPage />} />
            <Route path=":tabId/*" element={<TabsPage />} />
          </Route>
        </Routes>
      </div>
    </div>
  </>
);
