import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Navigate, Route, Routes } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { TabsPage } from './components/TabsPage';

export const App = () => (
  <>
    {/* Also requires <html class="has-navbar-fixed-top"> */}
    <NavBar />

    <div className="section">
      <div className="container">
        <Routes>
          <Route path="/" element={<h1 className="title">Home page</h1>} />
          <Route path="/tabs" element={<h1 className="title">Tabs page</h1>} />
          <Route path="tabs">
            <Route index element={<TabsPage />} />
            <Route path=":tabId" element={<TabsPage />} />
          </Route>
          <Route path="*" element={<h1 className="title">Page not found</h1>} />
          <Route path="/home" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </div>
  </>
);
