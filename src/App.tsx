import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import TabsPage from './pages/TabsPage';
import NotFound from './pages/NotFound';

export const App = () => {
  return (
    <>
      <Navbar />

      <div className="section">
        <div className="container">
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Navigate to="/" replace />} />
              <Route path="tabs">
                <Route index element={<TabsPage />} />
                <Route path=":tabId" element={<TabsPage />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </div>
    </>
  );
};
