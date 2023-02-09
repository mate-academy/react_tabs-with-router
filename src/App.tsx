import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Navigate, Route, Routes } from 'react-router-dom';
import { HomePage } from './Page/HomePage';
import { PageNotFound } from './Page/PageNotFound';
import { TabsPage } from './Page/TabsPage';
import { NavBar } from './NavBar';

export const App = () => (
  <>
    {/* Also requires <html class="has-navbar-fixed-top"> */}
    <NavBar />

    <div className="section">
      <div className="container">
        <Routes>
          <Route path="*" element={<PageNotFound />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="/tabs" element={<TabsPage />}>
            <Route path=":tabId" element={<TabsPage />} />
          </Route>
        </Routes>
      </div>
    </div>
  </>
);
