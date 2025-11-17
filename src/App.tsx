import { Routes, Route, Navigate } from 'react-router-dom';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import TabsPage from './pages/TabsPage/TabsPage';

export const App = () => {
  return (
    <>
      <Navbar />

      <div className="section">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />

            {/* redirect /home → / */}
            <Route path="/home" element={<Navigate to="/" replace />} />

            {/* nested routes */}
            <Route path="tabs">
              <Route index element={<TabsPage />} />
              <Route path=":tabId" element={<TabsPage />} />
            </Route>

            {/* not found */}
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

export default App;
