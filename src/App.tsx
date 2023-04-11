import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Navigate, Route, Routes } from 'react-router-dom';
import { TabsPage } from './pages/TabsPage';
import { MainNav } from './components/MainNav';

export const App = () => (
  <>
    {/* Also requires <html class="has-navbar-fixed-top"> */}
    <MainNav />

    <div className="section">
      <div className="container">
        <Routes>
          <Route path="tabs">
            <Route index element={<TabsPage />} />
            <Route path=":tabId" element={<TabsPage />} />
          </Route>

          <Route
            path="/"
            element={<h1 className="title">Home page</h1>}
          />

          <Route
            path="home"
            element={<Navigate to="/" />}
          />

          <Route
            path="*"
            element={<h1 className="title">Page not found</h1>}
          />
        </Routes>
      </div>
    </div>
  </>
);
